import React from 'react'
import SideBar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            otherList: [{ title: 'Kohlrabi welsh', note: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic', active: true},
            { title: 'Dandelion cucumber', note: 'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini', active: false },
            { title: 'Prairie turnip', note: 'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip', active: false },
            ],
            title: 'Kohlrabi welsh', note: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic',
        }
    }

    updateTitleItem(ev){
        const otherList = [...this.state.otherList]
        let title = this.state.title
        otherList.forEach(list => {
            if(list.active === true){
                title = ev.target.value
                list.title = ev.target.value
            }
        })
        this.setState({
            otherList, title
        })
        console.log(otherList)
    }

    updateNoteItem(ev){
        const otherList = [...this.state.otherList]
        let note = this.state.note
        otherList.forEach(list => {
            if(list.active === true){
                note = ev.target.value
                list.note = ev.target.value
            }
        })
        this.setState({
            otherList,note
        })
        console.log(otherList)
    }

    handleClick(item, ev){
        
        const otherList = [...this.state.otherList]
        let title = this.state.title
        let note = this.state.note
        
        otherList.forEach(list => {
            if(list === item){
                list.active = true
                title = list.title
                note = list.note
            }
            else{
                list.active = false
            }
        })
        
        console.log(title)
        this.setState({
            otherList: otherList, 
            title: title,
            note: note
        })
        
    }

    render(){
        return (
            <div className="Main" style={style}>
                <SideBar/>
                <NoteList value={this.state} onClick={this.handleClick.bind(this)}/>
                <NoteForm value={this.state.title} value2={this.state.note} onTitleClick={this.updateTitleItem.bind(this)} onNoteClick={this.updateNoteItem.bind(this)}/>
            </div>
        ); 
    }
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
  }
export default Main