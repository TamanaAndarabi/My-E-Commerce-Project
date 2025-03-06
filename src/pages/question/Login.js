import React ,{useEffect} from "react";

 const Login = ()=>{
    useEffect(() => {
        // اعمال استایل به body هنگام ورود به صفحه
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#0ff';
        document.body.style.fontFamily = "'Orbitron', sans-serif";
        document.body.style.display = 'flex';
        document.body.style.justifyContent = 'center';
        document.body.style.alignItems = 'center';
        document.body.style.height = '100vh';
        document.body.style.margin = '0';
    
        return () => {
          // بازگرداندن استایل body به حالت پیش‌فرض هنگام خروج از صفحه
          document.body.style = '';
        };
      }, []);
    
      return (
        <React.Fragment>
            <div className="App">
        <div class=" login-container">
        <h2 className="H2">Login Page</h2>
        <form>
            <input className="LoginInput" type="email" placeholder="Email" required />
            <input className="LoginInput" type="password" placeholder="Password" required />
            <button className="Button" type="submit"> Submit </button>
        </form>
        <p className="P">New User? <a href="#">Create Account</a></p>
    </div>
    </div>
    </React.Fragment>

      );
    };

export default Login ;