import logo from "../../../../assets/images/logo.png"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import { IconButton } from "@mui/material";
import { InputAdornment, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { Send } from "lucide-react";


function Footer() {
  return (
    <div className="my-5">
      <div className="container mx-auto px-5 py-5" >
        <div className="flex flex-wrap">
          <div className="w-3/12 flex-col px-3">
            <div>
              <img src={logo} alt="logo-shop"></img>
            </div>
            <p className="my-4 font-chilanka text-lg font-normal text-gray-400 text-justify">
              Subscribe to our newsletter to get updates about our grand offers.
            </p>
            <ul className="flex">
              <li>
                <IconButton >
                  <FacebookRoundedIcon fontSize="large" />
                </IconButton>
              </li>
              <li>
                <IconButton color="">
                  <TwitterIcon fontSize="large" />
                </IconButton>
              </li>
              <li>
                <IconButton color="">
                  <InstagramIcon fontSize="large" />
                </IconButton>
              </li>
              <li>
                <IconButton color="">
                  <YouTubeIcon fontSize="large" />
                </IconButton>
              </li>
              <li>
                <IconButton color="">
                  <TelegramIcon fontSize="large" />
                </IconButton>
              </li>
            </ul>
          </div>
          <div className="w-3/12 flex-col px-3">
            <h1 className="text-left font-chilanka text-3xl mb-2">Quick Links</h1>
            <ul className="flex-col font-chilanka text-left tx-lg space-y-2 mb-2">
              <li className='hover:text-orange-200'>Home</li>
              <li className='hover:text-orange-200'>About Us</li>
              <li className='hover:text-orange-200'>Offer</li>
              <li className='hover:text-orange-200'>Services</li>
              <li className='hover:text-orange-200'>Contact Us</li>
            </ul>
          </div>
          <div className="w-3/12 flex-col px-3">
            <h1 className="text-left font-chilanka text-3xl mb-2">Help Center            </h1>
            <ul className="flex-col font-chilanka text-left tx-lg space-y-2 mb-2">
              <li className='hover:text-orange-200'>FAQs</li>
              <li className='hover:text-orange-200'>Payment</li>
              <li className='hover:text-orange-200'>Returns & Refunds</li>
              <li className='hover:text-orange-200'>Checkout</li>
              <li className='hover:text-orange-200'>Delivery Information</li>
            </ul>
          </div>
          <div className="w-3/12 flex-col px-3">
            <h1 className="text-left font-chilanka text-3xl mb-2">Our Newsletter
            </h1>
            <p className="my-4 font-chilanka text-lg font-normal text-gray-400 text-justify">Subscribe to our newsletter to get updates about our grand offers.</p>
            <div className="flex">
              <TextField placeholder='Enter Your Email Here' size='normal' className="w-[306px]"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Box className="bg-custom rounded-full">
                        <IconButton>
                          <Send className="text-white fill-white" />
                        </IconButton>
                      </Box>
                    </InputAdornment>
                  )
                }
                }
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '30px', // Adjust the value to your preference
                  },
                }}
              ></TextField>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )

}
export default Footer;