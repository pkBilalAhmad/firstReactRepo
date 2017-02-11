import React from 'react';
import ReactDOM from "react-dom"
import {Router,Route,Link,hashHistory,IndexRoute} from 'react-router'
import './index.css'
import './color.css'
import './style/pd.css'
import './style/border.css'
const Modal = require('./modal.jsx')
const Cart = require('./cart.jsx')
const Checkout = require('./checkout.jsx')
const Product = require('./product.jsx')
const PRODUCTS = [
  { id: 0, src: 'https://i.imgur.com/mVhn1xd.jpg', title: 'Pro Express.js', url: 'http://amzn.to/1D6qiqk' },
  { id: 1, src: 'http://whatpixel.com/images/2016/09/react-up-and-running.jpg', title: 'Practical Node.js', url: 'http://amzn.to/NuQ0fM' },
  { id: 2, src: 'http://blog.krawaller.se/img/reactedge.jpg', title: 'Express API Reference', url: 'http://amzn.to/1xcHanf' },
  { id: 3, src: 'http://whatpixel.com/images/2016/09/reactjs-essentials-book-cover.jpg', title: 'React Quickly', url: 'https://www.manning.com/books/react-quickly'},
  { id: 4, src: 'https://www.packtpub.com/sites/default/files/B04784_MockupCover_Cookbook.jpg', title: 'Full Stack JavaScript', url: 'http://www.apress.com/9781484217504'}
]

function Heading(){
  return (
    <h1 className='black t-white pd-15 bdr-r-5'>Buy a Book from Bilal online Book Store</h1>
  )
}
var Copy = ()=> <p>Please click on a book to view details in a modal. You can copy/paste the link of the modal. The link will open book on a separate page.</p>      

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.isModal = (nextProps.location.state &&
      nextProps.location.state.modal)
    if (this.isModal &&
      nextProps.location.key !== this.props.location.key) {
      this.previousChildren = this.props.children
    }
  }
  render() {
    console.log('Modal: ', this.isModal)
    return (
      <div className="well">
        <Heading/>
        <div>
          {(this.isModal)?this.previousChildren:this.props.children}
          {/* {this.props.children} */}
          {(this.isModal)?
            <Modal isOpen={true} returnTo={this.props.location.state.returnTo}>
              {this.props.children}
            </Modal> : ''
          }
        </div>
      </div>
    )
  }
}

class Index extends React.Component {
  render() {
    return (
      <div className="skyblue bdr-r-5 pd-15">
        <Copy/>
        <p><Link to="/cart" className="btn black t-white">Cart</Link></p>
        <div>
          {PRODUCTS.map(picture => (
            <Link key={picture.id}
              to={{pathname: `/products/${picture.id}`,
                state: { modal: true,
                  returnTo: this.props.location.pathname }
                }
              }>
              <img style={{ margin: 10 }} src={picture.src} height="100" role="presentation"/>
            </Link>
          ))}
        </div>
      </div>
    )
  }
}
let cartItems = {}
const addToCart = (id) => {
  if (cartItems[id])
    cartItems[id] += 1
  else
    cartItems[id] = 1
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/products/:id" component={Product}
        addToCart={addToCart}
        products={PRODUCTS} />
      <Route path="/cart" component={Cart}
      cartItems={cartItems} products={PRODUCTS}/>
    </Route>
    <Route path="/checkout" component={Checkout}
      cartItems={cartItems} products={PRODUCTS}/>
  </Router>
), document.getElementById('root'))
