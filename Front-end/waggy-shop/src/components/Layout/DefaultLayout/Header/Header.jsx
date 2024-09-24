import { InputAdornment, TextField } from '@mui/material';
import logo from '../../../../assets/images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='flex flex-col shadow-lg divide-y divide-slate-200 w-full'>
      <div className='flex pt-2 pb-2 w-full justify-center'>
        <div className='flex items-center justify-between pt-6 pb-6 w-3/4 '>
          <div>
            <img alt="logo-waggy-shop" src={logo}></img>
          </div>
          <div>
            <TextField placeholder='Search For More Than 10,000 Products' size='normal' className='w-[650px]'
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" className="">
                    <IconButton>
                      <SearchIcon className="cursor-pointer" />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            ></TextField>
          </div>
          <div className='flex flex-col text-right'>
            <span className='font-light text-lg text-slate-400'>Phone</span>
            <h5 className="font-chilanka font-medium text-xl ">+084-393728287</h5>
          </div>
          <div className='flex flex-col text-right'>
            <span className='font-light text-lg text-slate-400'>Email</span>
            <h5 className="font-chilanka font-medium text-xl ">Waggy@gmail.com
            </h5>
          </div>
        </div>
      </div>
      <div className='flex justify-center pt-2 pb-2 w-full'>
        <div className='flex items-center justify-beetwen w-3/4'>
          <ul className='flex gap-10 items-center justify-center flex-1 font-chilanka'>
            <li className='hover:text-orange-200'>
              <Link to="/" relative='path'>Home</Link>
            </li>
            <li className='hover:text-orange-200'>
              <Link to="/shop" relative='path'>Shop</Link>
            </li>
            <li className='hover:text-orange-200'>
              <Link to="/blog" relative='path'>Blog</Link>
            </li>
            <li className='hover:text-orange-200'>
              <Link to="/contact" relative='path'>Contact</Link>
            </li>
          </ul>
          <div className='flex items-center gap-3'>
            <IconButton>
              <AccountCircleIcon></AccountCircleIcon>
            </IconButton>
            <IconButton aria-label="favorite">
              <SearchIcon color="action" />
            </IconButton>
            <IconButton aria-label="cart">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon color="action" />
              </Badge>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;