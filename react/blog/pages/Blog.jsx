// Home.jsx
import React from 'react'

// Utilities
import AppStore from '../stores/AppStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

// Components
import Header from '../components/Header';
import BlogList from '../components/BlogList';
import BlogSingle from '../components/BlogSingle';

class Blog extends React.Component{

	getPage(){

    let pages = AppStore.data.pages;
		let pages_object = _.indexBy(pages, 'slug');
    let page = pages_object['home'];
	  
    // Get page info 
    let metafields = page.metafields;
    let hero = _.findWhere(metafields, { key: 'hero' });
    page.hero = 'https://cosmicjs.com/uploads/' + hero.value;
    
    let headline = _.findWhere(metafields, { key: 'headline' });
    page.headline = headline.value;

    let subheadline = _.findWhere(metafields, { key: 'subheadline' });
    page.subheadline = subheadline.value;
    
    if(!this.props.params.slug){
    
      page.main_content = <BlogList/>;
    
    } else {
      
      page.main_content = <BlogSingle slug={ this.props.params.slug }/>;

    }
  
	  return page;

	}
  
  render(){
  	
  	let globals = AppStore.data.globals;
  	let pages = AppStore.data.pages;
  	let page = this.getPage();

  	return (
      <div>
        <Header globals={ globals } pages={ pages } page={ page }/>
        <div id="main-content" className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              { page.main_content }
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Blog;