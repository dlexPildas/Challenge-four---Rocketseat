import React from "react";
import "./PostList.css";
import Post from "./Post";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          author: {
            name: "Julio Alcantara",
            avatar: "http://url-da-imagem.com/imagem.jpg"
          },
          date: "04 Jun 2019",
          content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
          comments: [
            {
              id: 1,
              author: {
                name: "Diego Fernandes",
                avatar: "http://url-da-imagem.com/imagem.jpg"
              },
              content:
                " Responsável por armazenar os dados da listagem de post, esses dados devem ficar dentro do state do componente e não em uma variável comum, por exemplo:"
            }
          ]
        },
        {
          id: 2,
          author: {
            name: "Gabriel Lisboa",
            avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
          },
          date: "04 Jun 2019",
          content: "Fala galera, beleza?",
          comments: [
            {
              id: 1,
              author: {
                name: "Clara Lisboa",
                avatar: "http://url-da-imagem.com/imagem.jpg"
              },
              content: "Conteúdo do comentário"
            },
            {
              id: 2,
              author: {
                name: "Cézar Toledo",
                avatar: "http://url-da-imagem.com/imagem.jpg"
              },
              content: "Conteúdo do comentário"
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div className="main-container">
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
