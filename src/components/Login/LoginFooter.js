import React from 'react';
import { Link } from 'react-router-dom';

const LoginFooter = () => (
  <div className="p-container_panel_foot">
    <Link to="/account/reminder" className="p-container_panel_link">パスワードをお忘れの方はこちら</Link>
    <a className="p-container_panel_link" href="https://smartplus-sec.com" target="_blank">そのほかでお困りの方はこちら</a>
  </div>
)

export default LoginFooter;