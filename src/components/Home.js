import React,{Component} from 'react'
import Rainbow from '../hoc/Rainbow';
import axios from 'axios';
import {Link} from 'react-router-dom';
import yilanEfdal from '../yilanefdal.png';


 class Home extends Component {
     state={
         posts:[]
     }

    componentDidMount() 
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(
            res => {
            console.log(res);
            this.setState({
                posts:res.data.slice(0,20)
            })
        }
        )
    
            
    }

     render() {
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className='post card' key={post.id}>
                    <Link to="/contact" >
                    <img src={yilanEfdal} />
                    </Link>
                    
                    <div className='card-content'>
                        <Link to={'/'+post.id}>
                        <span className='card-title red-text'>
                            {post.title}
                        </span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                 </div>
                )
                
            })
        ) : (
            <div className ='center'>
                No post to show.
            </div>
        );
        return (
            <div className='home container'>
                <p className='center'>Yılan Yap Kendini tısss</p>
                <h4 className='center'>Home</h4>
                <p>orem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir.</p>
                {postList}
            </div>
        )
     }
    
}

export default Rainbow(Home);
