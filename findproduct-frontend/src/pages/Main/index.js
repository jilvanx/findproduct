import React, { Component } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';
import NumberFormat from 'react-number-format';

import { Header, Form, SubmitButton, Total, List } from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    products: [],
    searchProd: '',
    loading: false,
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { searchProd } = this.state;

    if (searchProd) {
      this.setState({ loading: true });

      try {
        const response = await api.get(`/search?terms=${searchProd}`);

        this.setState({
          products: response.data.products,
          loading: false,
        });
      } catch (err) {
        console.log(`😱 Request failed: ${err}`);
        this.setState({
          loading: false,
        });
      }
    }
  };

  handleInputChange = e => {
    this.setState({ searchProd: e.target.value });
  };

  render() {
    const { products, searchProd, loading } = this.state;

    return (
      <>
        <Header>
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Pesquisar produto"
              value={searchProd}
              onChange={this.handleInputChange}
            />
            <SubmitButton loading={loading ? 1 : 0}>
              {loading ? (
                <FaSpinner color="#4c4c4c" size={14} />
              ) : (
                <FaSearch color="#4c4c4c" size={14} />
              )}
            </SubmitButton>
          </Form>
        </Header>
        <Total>
          <p>
            <strong>{products.length} produtos encontros</strong>
          </p>
        </Total>
        <List>
          <div>
            {products.map(prod => (
              <li key={prod.id}>
                <img src={prod.img} alt={prod.title} />
                <p>
                  <strong>{prod.title}</strong>
                </p>
                <NumberFormat
                  value={prod.price}
                  displayType="text"
                  fixedDecimalScale
                  decimalScale="2"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="R$ "
                  renderText={value => <span>De: {value}</span>}
                />
                <NumberFormat
                  value={prod.sPrice}
                  displayType="text"
                  fixedDecimalScale
                  decimalScale="2"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="R$ "
                  renderText={value => (
                    <span className="sprice">Por: {value}</span>
                  )}
                />
              </li>
            ))}
          </div>
        </List>
      </>
    );
  }
}
