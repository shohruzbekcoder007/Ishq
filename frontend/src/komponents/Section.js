import React from 'react';
import NewPost from './NewPost';

function Section() {
    
    const [ selected, setSelected ] = React.useState([1,0,0,0,0,0])
    const [ posts, setPosts ] = React.useState([])
    console.log(posts)
    React.useEffect(()=>{
        fetch('http://localhost:8080/getPosts')
        .then(response => response.json())
        .then(data => {
            setPosts(data);
            console.log(data,"<<<<<<<<<<");
        })
        .catch(error => {
            console.error(error)
        })
    },[])
    const handleClick = (yunalish,select) => {
        setSelected(select);
        console.log("yunalish",yunalish)
        fetch('http://localhost:8080/getPosts/' + yunalish)
        .then(response => response.json())
        .then(data => {
            setPosts(data);
            console.log(data,"<<<<<<<<<<");
        })
        .catch(error => {
            console.error(error)
        })
    }
    
  return (
      
    <>
    
      <section className="whats-news-area pt-50 pb-20">
        <div className="container">
            <div className="row">
            <div className="col-lg-8">
                <div className="row d-flex justify-content-between">
                    <div className="col-lg-3 col-md-3">
                        <div className="section-tittle mb-30">
                            <h3>Whats New</h3>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                        <div className="properties__button">
                            <nav>                                                                     
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <span className={selected[0]?"nav-item nav-link active":"nav-item nav-link"} id="nav-home-tab"    data-toggle="tab" href="#nav-home"      role="tab" aria-controls="nav-home"    aria-selected={""+selected[0]} onClick={()=>{handleClick("",[1,0,0,0,0,0])}} style={{cursor: "pointer"}}>Barchasi</span>
                                    <span className={selected[1]?"nav-item nav-link active":"nav-item nav-link"} id="nav-profile-tab" data-toggle="tab" href="#nav-profile"   role="tab" aria-controls="nav-profile" aria-selected={""+selected[1]} onClick={()=>{handleClick("iqtisod",[0,1,0,0,0,0])}} style={{cursor: "pointer"}}>Iqtisodiy</span>
                                    <span className={selected[2]?"nav-item nav-link active":"nav-item nav-link"} id="nav-contact-tab" data-toggle="tab" href="#nav-contact"   role="tab" aria-controls="nav-contact" aria-selected={""+selected[2]} onClick={()=>{handleClick("siyosat",[0,0,1,0,0,0])}} style={{cursor: "pointer"}}>Siyosat</span>
                                    <span className={selected[3]?"nav-item nav-link active":"nav-item nav-link"} id="nav-last-tab"    data-toggle="tab" href="#nav-last"      role="tab" aria-controls="nav-contact" aria-selected={""+selected[3]} onClick={()=>{handleClick("ijtimoiy",[0,0,0,1,0,0])}} style={{cursor: "pointer"}}>Ijtimoiy</span>
                                    <span className={selected[4]?"nav-item nav-link active":"nav-item nav-link"} id="nav-Sports"      data-toggle="tab" href="#nav-nav-Sport" role="tab" aria-controls="nav-contact" aria-selected={""+selected[4]} onClick={()=>{handleClick("sport",[0,0,0,0,1,0])}} style={{cursor: "pointer"}}>Sport</span>
                                    <span className={selected[5]?"nav-item nav-link active":"nav-item nav-link"} id="nav-technology"  data-toggle="tab" href="#nav-techno"    role="tab" aria-controls="nav-contact" aria-selected={""+selected[5]} onClick={()=>{handleClick("boshqa",[0,0,0,0,0,1])}} style={{cursor: "pointer"}}>Aralash</span>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">           
                                <div className="whats-news-caption">
                                    <div className="row">
                                        {console.log(posts)}
                                        {posts.map(post => {
                                            // console.log(post)
                                            return <NewPost 
                                                    key={post._id} 
                                                    minText={post.postMiniText}
                                                    type={post.mavzu}
                                                    data={post.data}
                                                    src={post.postImage}
                                                    data={post.data}
                                                />
                                        })}
                                        {/* <NewPost/> */}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="section-tittle mb-40">
                    <h3>Follow Us</h3>
                </div>
                    <div className="single-follow mb-45">
                        <div className="single-box">
                            <div className="follow-us d-flex align-items-center">
                                <div className="follow-social">
                                    <a href="#"><img src="assets/img/news/icon-fb.png" alt=""/></a>
                                </div>
                                <div className="follow-count">  
                                    <span>8,045</span>
                                    <p>Fans</p>
                                </div>
                            </div> 
                            <div className="follow-us d-flex align-items-center">
                                <div className="follow-social">
                                    <a href="#"><img src="assets/img/news/icon-tw.png" alt=""/></a>
                                </div>
                                <div className="follow-count">
                                    <span>8,045</span>
                                    <p>Fans</p>
                                </div>
                            </div>
                                <div className="follow-us d-flex align-items-center">
                                <div className="follow-social">
                                    <a href="#"><img src="assets/img/news/icon-ins.png" alt=""/></a>
                                </div>
                                <div className="follow-count">
                                    <span>8,045</span>
                                    <p>Fans</p>
                                </div>
                            </div>
                            <div className="follow-us d-flex align-items-center">
                                <div className="follow-social">
                                    <a href="#"><img src="assets/img/news/icon-yo.png" alt=""/></a>
                                </div>
                                <div className="follow-count">
                                    <span>8,045</span>
                                    <p>Fans</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="news-poster d-none d-lg-block">
                        <img src="assets/img/news/news_card.jpg" alt=""/>
                    </div>
                </div>
            </div>
            </div>
        </section>
    </>
  );
}

export default Section;
