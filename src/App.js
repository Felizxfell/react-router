
import { HashRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import ProfilePage from './ProfilePage';
import BlogPost from './BlogPost';
import LoginPage from './LoginPage';
import LogoutPage from './LogoutPage';
import { AuthProvider, AutRouter } from './auth';
import { useBlogData } from './useBlogData';

function App() {
  const {
    blogdata,
    EliminarBlog,
    EditarBlog
  } = useBlogData()

  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage blogdata={blogdata} />}>
              <Route path=":slug" element={                
                <BlogPost
                  blogdata={blogdata}
                  eliminarBlog={EliminarBlog}
                  editarBlog={EditarBlog}
                />
              } />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout"
              element={
                <AutRouter>
                  <LogoutPage />
                </AutRouter>}
            />
            <Route
              path="/profile"
              element={
                <AutRouter>
                  <ProfilePage />
                </AutRouter>
              }
            />
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;