import React from 'react';
import { Link } from 'react-router-dom';

const LoginFooter = () => (
  <div className="p-container_panel_foot">
    <Link to="/account/reminder" className="p-container_panel_link">パスワードをお忘れの方はこちら</Link>
    <a className="p-container_panel_link" href="https://smartplus-sec.com/contactus/" target="_blank" rel="noopener noreferrer">そのほかでお困りの方はこちら</a>
    <a className="p-container_panel_link" href="https://help.smartplus-sec.com/s/article/systemreqs" target="_blank" rel="noopener noreferrer">動作環境に関してはこちら</a>
  </div>
)

export default LoginFooter;
