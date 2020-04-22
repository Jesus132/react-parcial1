import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
    
       <div>
        <div>
          <a href="https://www.imdb.com/" target="_blank">
          
          


          </a>
        </div>
			<div id="banner">
				<div id="container">
					<h1>Create your account now and stay aware of:</h1>
						<ul>
							<li>Movies, TV & Showtimes</li>
							<li>Celebs, Events & Photos</li>
							<li>News & Community</li>
						</ul>
			  </div>
			</div>
			<div>
				<div>
          <a href="https://www.indiewire.com/2019/09/joker-hollywood-premiere-red-carpet-1202177161/" target="_blank">
            <img src="images/joker.jpg"></img>
            <p>‘Joker’: Warner Bros. Bans Interview Press From Red Carpet Ahead of Hollywood Premiere</p>
          </a>
        </div>
				<article>
          <a href="https://www.thewrap.com/black-panther-winston-duke-apple-swagger-kevin-durant/" target="_blank">
            
            


              <p>
                ‘Black Panther’ Star Winston Duke to Star in Apple’s Basketball Drama ‘Swagger’ From Kevin Durant
              </p>
            
          </a>
        </article>

        <article>
          <a href="https://www.tvguide.com/news/netflix-originals-complete-guide-2019/?rss=breakingnews">
            



            <p>Netflix's 2019 Originals: A Complete Guide to What's New </p>
          </a>
        </article>
			</div>
			<footer>
				<p>Follow IMDb on</p>
				<a href="https://www.facebook.com/imdb" target="_blank"><i id="fab fa-facebook-square fa-2x"></i></a>
				<a href="https://www.instagram.com/imdb/" target="_blank"><i id="fab fa-instagram fa-2x"></i></a>
				<a href="https://www.twitch.tv/IMDb/" target="_blank"><i id="fab fa-twitch fa-2x"></i></a>
				<a href="https://twitter.com/imdb" target="_blank"><i id="fab fa-twitter fa-2x"></i></a>
				<a href="https://www.youtube.com/IMDb/" target="_blank"><i id="fab fa-youtube fa-2x"></i></a>
			</footer>

      
		</div>
    );
  }
}

render(<App />, document.getElementById('root'));
