import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const getInitials = (name) => {
    return name
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2)
      : "U";
  };

  return (
    <div>
      <nav className="nav">
        <div className="nav-left">
          <span className="brand" onClick={() => navigate("/")}>
            Hear Ur Bias
          </span>
        </div>

        <div className="nav-right">
          {currentUser ? (
            <>
              <button className="nav-link" onClick={() => navigate("/tool")}>
                Tool
              </button>
              <div 
                className="nav-link" 
                onClick={() => navigate("/profile")}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  background: 'rgba(255,255,255,0.1)',
                  padding: '6px 12px',
                  borderRadius: '99px',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #e7c78f, #c9a55c)',
                  color: '#1c1917',
                  fontSize: '0.7rem',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                   {currentUser.photoURL ? (
                      <img src={currentUser.photoURL} alt="avatar" style={{width: '100%', height: '100%', borderRadius: '50%'}} />
                   ) : (
                      getInitials(currentUser.displayName || currentUser.email)
                   )}
                </div>
                <span>{currentUser.displayName || currentUser.email.split('@')[0]}</span>
              </div>
            </>
          ) : (
            <>
              <button className="nav-link" onClick={() => navigate("/login")}>
                Login
              </button>
              <button className="nav-cta" onClick={() => navigate("/signup")}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
