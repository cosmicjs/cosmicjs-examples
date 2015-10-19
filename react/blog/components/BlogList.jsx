// BlogList.jsx
import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppStore from '../stores/AppStore';

class BlogList extends React.Component{

  scrollTop(){
    $('html, body').animate({
        scrollTop: $("#main-content").offset().top
    }, 500);
  }

  getMoreArticles(){

    AppDispatcher.dispatch({
      action: 'get-more-items'
    });

  }

  render(){
    
    let item_num = AppStore.data.item_num;
    let _this = this;

    let articles = AppStore.data.articles;

    let load_more;
    let show_more_text = 'Show More Articles';

    if(AppStore.data.loading){
      show_more_text = 'Loading...';
    }

    if(articles && item_num <= articles.length){
      load_more = (
        <div>
          <button className="btn btn-default center-block" onClick={ this.getMoreArticles }>
            { show_more_text }
          </button>
        </div>
      );
    }

    articles = _.take(articles, item_num);
    
    let articles_html = articles.map(( article ) => {
      let date_obj = new Date(article.created);
      let created = (date_obj.getMonth()+1) + '/' + date_obj.getDate() + '/' + date_obj.getFullYear();
      return (
        <div key={ 'key-' + article.slug }>
          <div className="post-preview">
            <h2 className="post-title pointer">
              <Link to={ '/blog/' + article.slug } onClick={ this.scrollTop }>{ article.title }</Link>
            </h2>
            <p className="post-meta">Posted by <a href="http://tonyspiro.com" target="_blank">Tony Spiro</a> on { created }</p>
          </div>
          <hr/>
        </div>
      );
    });

    return (
      <div>
        <div>{ articles_html }</div>
        { load_more }
      </div>
    );
  }
}

export default BlogList;