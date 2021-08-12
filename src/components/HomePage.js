import React from 'react';
import InputForm from './InputForm';
import Buttons from './Buttons'
import moon from '../assets/moon.png'
import sun from '../assets/sun.png'

const inputs = [
    {
        name: 'name',
        placeholder: 'Nombre',
        type: 'text'
    },
    {
        name: 'email',
        placeholder: 'email',
        type: 'email'
    }
]

const buttons =[    
    {
        name: 'Exit',
        placeholder: 'Exit',
        type: 'button',
        color: 'lightcoral'
    },
    {
        name: 'Save',
        placeholder: 'Save',
        type: 'button',
        color: 'lightgreen'
    }
]

const HomePage = (props ) =>{
    return(
        <>
            <div className='title'>
                <h1>Dark Mode Challenge</h1>
                <img src={props.darkMode ? sun : moon } alt='moon' onClick={()=>{ props.handleClick() }}/>
            </div>
            <div className='paragraph'>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type 
                 specimen book. It has survived not only five centuries, but also the leap into 
                 electronic typesetting, remaining essentially unchanged. It was popularised in 
                 the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                 and more recently with desktop publishing software like Aldus PageMaker including 
                 versions of Lorem Ipsum.
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in 
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum.
                </p>
            </div>
            <form>
                <div className='inputs'>
                    {inputs.map((el)=>(
                        <InputForm name={el.name} type={el.type} placeholder={el.placeholder} key={el.name}/>
                    ))}
                </div>
                <div className='buttons'>
                    {buttons.map((el)=>(
                        <Buttons name={el.name} type={el.type} placeholder={el.placeholder} color={el.color} key={el.name} />
                    ))}
                </div>
            </form>
        
        </>
    )
}

export default HomePage;