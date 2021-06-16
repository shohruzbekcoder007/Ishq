import React from 'react';
import LeftMini from './LeftMini';
import MainPost from './MainPost';
import Post from './Post';
import './komponentsCss.css';


function SectionTop() {
    const [posts,setPosts] = React.useState([]);
    const [postsLeft,setPostsLeft] = React.useState([]);
    const [grShakil, setGrShakil] = React.useState('line')
    React.useEffect(() => {
        fetch('http://localhost:8080/getPosts/post')
        .then(response => response.json())
        .then(data => {
            setPosts(data);
            console.log(data);
        })
        .catch(error => {
            console.error(error)
        })

        fetch('http://localhost:8080/getPosts/postLeft')
        .then(response => response.json())
        .then(data => {
            setPostsLeft(data);
            console.log(data);
        })
        .catch(error => {
            console.error(error)
        })
    },[]);
  return (
    <>
      <div className="trending-area fix">
        <div className="container">
            <div className="trending-main">

                <div className="row">
                    <div className="col-lg-12">
                        <div className='gr-change'><span>Grafik shakli</span>
                            <ul className="gr-list">
                            {/* line bar pie scatter */}
                                <li onClick={()=>{setGrShakil('line')}}>Line</li>
                                <li onClick={()=>{setGrShakil('bar')}}>Bar</li>
                                <li onClick={()=>{setGrShakil('pie')}}>Pie</li>
                                <li onClick={()=>{setGrShakil('scatter')}}>Scatter</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        {/* <div className="trending-top mb-30">
                            <div className="trend-top-img">
                                <img src="assets/img/trending/trending_top.jpg" alt=""/>
                                <div className="trend-top-cap">
                                    <span>Appetizers</span>
                                    <h2><a href="details.html">Welcome To The Best Model Winner Contest At Look of the year</a></h2>
                                </div>
                            </div>
                        </div> */}
                        <MainPost shakil = {grShakil}/>
                        <h3 style={{textAlign: 'center'}}>Yangi postlar bilan tanishing</h3>
                        <div className="trending-bottom">
                            <div className="row">
                                
                                {posts.map(post => {
                                    // console.log(post)
                                    return <Post 
                                            key={post._id} 
                                            minText={post.postMiniText}
                                            type={post.mavzu}
                                            data={post.data}
                                            src={post.postImage}
                                            data={post.data}
                                        />
                                })}
                                {/* <Post/> */}
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        {/* <LeftMini/> */}
                        {postsLeft.map(post => {
                            return <LeftMini
                                        key={post._id} 
                                        minText={post.postMiniText}
                                        type={post.mavzu}
                                        data={post.data}
                                        src={post.postImage}
                                    />
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default SectionTop;
