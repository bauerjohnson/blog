import React, {Component} from 'react';

import Sidebar from '../latest/Sidebar/Sidebar';
import classes from '../Home/Home.css';
import Card from '../../UI/Card/Card';
//import { Carousel } from 'react-bootstrap';
import Carousel from '../../Carousel/Carousel';
import Cars from '../../UI/Card/Cars/Cars';
import Readmoreless from 'react-read-more-less';
import ReactDOM from 'react-dom';
import Footer from '../Home/footer/footer';

const galleryheight = 450;

const tik = "The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its immediate predecessor, the scroll. A single sheet in a codex is a leaf, and each side of a leaf is a page. As an intellectual object, a book is prototypically a composition of such great length that it takes a considerable investment of time to compose and a still considerable, though not so extensive, investment of time to read. This sense of book has a restricted and an unrestricted sense. In the restricted sense, a book is a self-sufficient section or part of a longer composition, a usage that reflects the fact that, in antiquity, long works had to be written on several scrolls, and each scroll had to be identified by the book it contained";
const scarlet = "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.";
const all ="Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is."; 
class  Home extends Component {

  


    render() {
        return (
    
            <Cars> 
                   <div className = {classes.Sidebar}>
                 
                 <Sidebar />
                 </div>
        
        
          <div className = {classes.homeheader}>
          <div className = {classes.container}>
         
          <div className = {classes.gallerypost}>
          <Carousel />
          <div className = {classes.containers}>
          <div className = {classes.object3}>
          <div className={classes.latestpost}>
                <header>latest</header>
                <img className = {classes.img} src ={require('../../../assets/tik.PNG')} alt = "axe"/>
          
          <h1>TIK VEBTURES IS LIVE AGAIN</h1>
        <Readmoreless charLimit = {200}
                       readMoreText = {'Read more'}
                       readLessText = {'Read less'}>
                       
          {tik}
        </Readmoreless>
        </div>
        
        </div>
        
        
        <div className = {classes.object3}>
          <div className={classes.latestpost}>
          <img className = {classes.img} src ={require('../../../assets/s.jpg')} alt = "s"/>
               
          
          
        <h1>SCARLETT STORY</h1>
        <Readmoreless charLimit = {200}
                       readMoreText = {'Read more'}
                       readLessText = {'Read less'}>
                       
        {scarlet}
        </Readmoreless>
          </div>
        </div>
        <div className = {classes.object3}>
          <div className={classes.latestpost}>
          <img className = {classes.img} src ={require('../../../assets/allsafe.png')} alt = "s"/>
               
          
          
        <h1>E CORP</h1>
        <Readmoreless charLimit = {200}
                       readMoreText = {'Read more'}
                       readLessText = {'Read less'}>
        {all}
        </Readmoreless>
          </div>
        </div>
        </div>
        
           <div className = {classes.object1}>
                        <div className = {classes.box}>
        
                        <a href = "#"><img className = {classes.img} src ={require('../../../assets/elli.jpg')} alt = "axe"/>
                        <h4 className = {classes.word1}>elli is back to work</h4></a> 
                        </div>
                        
                  
                    </div>
                    <div className = {classes.object2}>
                        <div className = {classes.box}>
        
                        <a href = "#"><img className = {classes.img} src ={require('../../../assets/gal.jpg')} alt = "axe"/>
                        <h4 className = {classes.word2}>tech is getting better</h4></a> 
                        </div>
                       
                  
                    </div>
                
                  
                       
                  
                    </div>
                    </div>
                   </div> 

                   <Footer />
                   </Cars>
                
          
        )  
    }
}





/* //  return (
// <div>entertainment</div>
// );
} */

export default Home;