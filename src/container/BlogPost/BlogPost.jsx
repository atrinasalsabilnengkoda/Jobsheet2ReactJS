import React, { Component } from 'react';
import './BlogPost.css';
import Post from './Post';

class BlogPost extends Component{
    state = {                   //komponen state dari React untuk statefull component
        listArtikel: []         //variabel array yang digunakan untuk menyimpan data API
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }
    render(){
        return(
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel =>{
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} />
                    })
                }
            </div>
        )
    }
}

export default BlogPost;