import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useEffect } from 'react';

const supabase = createClient(
    "https://cyrokafeqtyphlvgdpbp.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5cm9rYWZlcXR5cGhsdmdkcGJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4MTA5NTQsImV4cCI6MjA1MTM4Njk1NH0.ZmLM5ny-F2vJsBWbmSr27QMfVD6QKPkQPMsHt72tCfk"
);
function Login() {
    const navigate = useNavigate();

    useEffect(() => {
      supabase.auth.onAuthStateChange(async (event) =>{
      if (event !== "SIGNED_OUT") {
         // forward to success URL
         navigate("/");
      } else if (event == "SIGNED_IN") {
        navigate("/success");
      }
      else {
        // forward to localhost:3000
        navigate("/success");
      }
    })
    }, []);
    return (
     
        <div className="App">
          <header className="App-header">
             <Auth
               supabaseClient={supabase}
               appearance={{ theme: ThemeSupa }}
               theme="dark"
               providers={["google", "github", "linkedin_oidc", "twitter", "facebook"]}
             />
          </header>
      </div>
    );
  }
  
  export default Login;