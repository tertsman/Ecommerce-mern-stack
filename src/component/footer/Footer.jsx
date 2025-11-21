
import { RiTShirtAirLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { PiSealPercent } from "react-icons/pi";
import { MdCurrencyExchange } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdOutlineSettingsPhone } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import {motion} from "framer-motion"

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="topInfo row overflow-hidden">
                <motion.div
                initial={{opacity:0,translateX:"-100%"}}
                whileInView={{opacity:1,translateX:0}}
                transition={{duration:2}}
                className="col-md-3 col ">
                    <span><RiTShirtAirLine/></span>
                    <span className='ms-2'>Everyday fresh products</span>
                </motion.div>
                <motion.div
                initial={{opacity:0,translateX:"-100%"}}
                whileInView={{opacity:1,translateX:0}}
                transition={{duration:1}}
                className="col-md-3 col">
                    <span><TbTruckDelivery/></span>
                    <span className='ms-2'>Free delivery for order over $70</span>
                </motion.div>
                <motion.div
                initial={{opacity:0,translateX:"100%"}}
                whileInView={{opacity:1,translateX:0}}
                transition={{duration:1}}
                className="col-md-3 col  ">
                    <span><PiSealPercent/></span>
                    <span className='ms-2'>Daily Mega Discounts</span>
                </motion.div>
                <motion.div
                initial={{opacity:0,translateX:"100%"}}
                whileInView={{opacity:1,translateX:0}}
                transition={{duration:2}}
                
                className="col-md-3 col ">
                    <span><MdCurrencyExchange/></span>
                    <span className='ms-2'>Best price on the market</span>
                </motion.div>
            </div>

            <div className="row wedget overflow-hidden">
                <motion.div
                initial={{opacity:0,translateX:"-100%"}}
                whileInView={{opacity:1,translateX:0}}
                transition={{duration:2}}
                className="col">
                    <h5>FRUIT & VEGETABLES</h5>
                    <ul>
                        <li> <Link to="/">Fresh Vegetables</Link> </li>
                        <li> <Link to="/">Herbs & Seasonings</Link> </li>
                        <li> <Link to="/">Fresh Fruits</Link> </li>
                        <li> <Link to="/">Cuts & Sprouts</Link> </li>
                        <li> <Link to="/">Exotic Fruits & Veggies</Link> </li>
                        <li> <Link to="/">Packaged Produce</Link> </li>
                        <li> <Link to="/">Party Trays</Link> </li>
                    </ul>
                </motion.div>
                <motion.div
                initial={{opacity:0,translateX:"-100%"}}
                whileInView={{opacity:1,translateX:0}}
                transition={{duration:1}}
                className="col">
                    <h5>Breakfast & Dairy</h5>
                    <ul>
                        <li> <Link to="/">Milk & Flavoured Milk</Link> </li>
                        <li> <Link to="/">Milk & Flavoured Milk</Link> </li>
                        <li> <Link to="/">Butter and Margarine</Link> </li>
                        <li> <Link to="/">Cheese</Link> </li>
                        <li> <Link to="/">Eggs Substitutes</Link> </li>
                        <li> <Link to="/">Honey</Link> </li>
                        <li> <Link to="/">Marmalades</Link> </li>
                        <li> <Link to="/">Sour Cream and Dips</Link> </li>
                        <li> <Link to="/">Yogurt</Link> </li>
                    </ul>
                </motion.div>
                <motion.div
                initial={{opacity:0,translateX:"100%"}}
                whileInView={{opacity:1,translateX:0}}
                transition={{duration:1}}
                 className="col">
                    <h5>Meat & Seafood</h5>
                    <ul>
                        <li> <Link to="/">Breakfast Sausage</Link> </li>
                        <li> <Link to="/">Dinner Sausage</Link> </li>
                        <li> <Link to="/">Beef</Link> </li>
                        <li> <Link to="/">Chicken</Link> </li>
                        <li> <Link to="/">Sliced Deli Meat</Link> </li>
                        <li> <Link to="/">Shrimp</Link> </li>
                        <li> <Link to="/">Wild Caught Fillets</Link> </li>
                        <li> <Link to="/">Crab and Shellfish</Link> </li>
                        <li> <Link to="/">Farm Raised Fillets</Link> </li>
                    </ul>
                </motion.div>
                <motion.div

                initial={{opacity:0,translateX:"100%"}}
                whileInView={{opacity:1,translateX:0}}
                transition={{duration:2}}
                 className="col">
                    <h5>Beverages</h5>
                    <ul>
                        <li> <Link to="/">Water</Link> </li>
                        <li> <Link to="/">Sparkling Water</Link> </li>
                        <li> <Link to="/">Soda & Pop</Link> </li>
                        <li> <Link to="/">Coffee</Link> </li>
                        <li> <Link to="/">Milk & Plant-Based Milk</Link> </li>
                        <li> <Link to="/">Tea & Kombucha</Link> </li>
                        <li> <Link to="/">Drink Boxes & Pouches</Link> </li>
                        <li> <Link to="/">Craft Beer</Link> </li>
                        <li> <Link to="/">Wine</Link> </li>
                    </ul>
                </motion.div>
                <motion.div
                initial={{opacity:0,translateX:"100%"}}
                whileInView={{opacity:1,translateX:0}}
                transition={{duration:3}}
                className="col">
                    <h5>Breads & Bakery</h5>
                    <ul>
                        <li> <Link to="/">Milk & Flavoured Milk</Link> </li>
                        <li> <Link to="/">Butter and Margarine</Link> </li>
                        <li> <Link to="/">Cheese</Link> </li>
                        <li> <Link to="/">Eggs Substitutes</Link> </li>
                        <li> <Link to="/">Honey</Link> </li>
                        <li> <Link to="/">Marmalades</Link> </li>
                        <li> <Link to="/">Sour Cream and Dips</Link> </li>
                    </ul>
                </motion.div>
            </div>


            <div className="foooter-info">
                <div className="site-phone">
                    <span className='icon'><MdOutlineSettingsPhone/></span>
                    <span className='ms-2 phone-details'>
                        <h6>8 800 555-55</h6>
                        <p>Working 8:00 - 22:00</p>
                    </span>
                </div>
                <div className="site-mobile">
                    <div className="app-content">
                        <h6>download app on mobile</h6>
                        <span>15% discount on your first purchase</span>
                    </div>
                    <div className="app-button">
                        <div className="socal-button">
                            <TiSocialFacebook/>
                        </div>
                        <div className="socal-button">
                            <TiSocialTwitter/>
                        </div>
                        <div className="socal-button">
                            <CiInstagram/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-copy">
                <div className="site-copy-right">
                    <p>Coppy right 2025 &copy; ecoShop  All rights reserved. Powered by TertCodding.</p>
                </div>
                <div className="site-privacy">
                    <ul>
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Terms and Condition</Link></li>
                        <li><Link to="/">Cookie</Link></li>
                    </ul>
                </div>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer
