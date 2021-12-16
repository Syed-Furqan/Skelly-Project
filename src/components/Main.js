import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import '../styles/Main.css';

const Main = () => {

    const history  = useHistory();

    const handleClick = () => {
        history.push('/login')
    }

    return (
        <div className='main'>
            <div className='main__header'>
                <p>Shipping and Payment</p>
                <div>
                    <div className='cart'><i className="fa fa-shopping-cart"></i></div>
                    <div className='line'></div>
                    <div className='truck'><i className="fa fa-truck"></i></div>
                </div>
            </div>
            <div className='main__body'>
                <div className='form'>
                    <div>
                        <button onClick={handleClick} className='b1'>Log In</button>
                        <button className='b2'>Sign Up</button>
                    </div>
                    <div>
                        <p>Shipping Information</p>
                        <div className='user-info'>
                            <div>
                                <input type="text" placeholder='Email'/>
                                <input type="text" placeholder='First Name'/>
                                <input type="text" placeholder='Last Name'/>
                                <input type="text" placeholder='Phone Number'/>
                            </div>
                            <div>
                                <input type="text" placeholder='Address'/>
                                <input type="text" placeholder='City'/>
                                <input type="text" placeholder='Postal Code / ZIP'/>
                                <select>
                                    <option>Poland</option>
                                    <option>Germany</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='payment'>
                    <div className='payment-method'>
                        <p>Payment Method</p>
                        <div>
                            <img alt="" src="https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo.png"/>
                            <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGFoqsu3IZAsxKlURpx31KNkOiT0d5jEEhh-l4LS6no3BHktgywh1EhcdrLi1nchtlWWY&usqp=CAU"/>
                            <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png"/>
                        </div>
                        <div>
                            <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Maestro_2016.svg/1200px-Maestro_2016.svg.png"/>
                            <img alt="" src="https://1000logos.net/wp-content/uploads/2021/05/Discover-logo.png"/>
                            <img alt="" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/IDEAL_Logo_2020.svg/1200px-IDEAL_Logo_2020.svg.png"/>
                        </div>
                    </div>
                    <div className='delivery-method'>
                        <p>Delivery Method</p>
                        <div>
                            <div>
                                <img alt="" src="https://chinapost-track.com/cdn/images/carriers/thumbnails/0072-inpost.png"/>
                                <p>$20.00</p>
                            </div>
                            <div>
                                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/DPD_logo%28red%292015.png/1200px-DPD_logo%28red%292015.png"/>
                                <p>$20.00</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img alt="" src="https://logos-download.com/wp-content/uploads/2016/07/DHL_logo.png"/>
                                <p>$20.00</p>
                            </div>
                            <div>
                                <img alt="" src="https://1000logos.net/wp-content/uploads/2021/04/Fedex-logo.png"/>
                                <p>$20.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='user-cart'>
                    <p>Your Cart</p>
                    <div>
                        <div>
                            <img alt="" src="https://toppng.com/uploads/preview/arment-black-tshirt-model-115630637551dnbp2wjol.png"/>
                            <div>
                                <p>T-Shirt</p>
                                <p>Summer Vibes</p>
                                <span>#261311</span>
                            </div>
                        </div>
                        <p>$89.99</p>
                    </div>
                    <div>
                        <div>
                            <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaTr8IT4ucuQyL1iOzk0fpOOqAU9PVKxlTNw&usqp=CAU"/>
                            <div>
                                <p>T-Shirt</p>
                                <p>Summer Vibes</p>
                                <span>#261311</span>
                            </div>
                        </div>
                        <p>$69.99</p>
                    </div>
                    <p><span>Total Cost</span><span>$159.98</span></p>
                    <div className='free-shipping'>
                        <i className="fa fa-truck"></i>
                        <p>You are $30.02 away from free shipping</p>
                    </div>
                </div>
            </div>
            <div className='main__footer'>
                <div className='main__footer__left'>
                    <i className='fa fa-arrow-left'></i>
                    <small>Back</small>
                </div>
                <div className='main__footer__right'>
                    <button className='b1'>Continue Shopping</button>
                    <button className='b2'>Proceed to Payment</button>
                </div>
            </div>
        </div>
    );
}

export default Main;