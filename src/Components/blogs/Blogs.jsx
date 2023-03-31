import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-auto text-left'>
            <h1 className='text-lg font-bold'>1.What is different between props and state?</h1>
            <p>Answer:props are passed via component properties, props are pass data they're not reactive. state stored data ,State are variables that react will react , updating the UI when values changes.</p>

            <h1 className='text-lg font-bold'>2.how to work useState?</h1>
            <p>Answer:To declare state using React Hooks, we need to use the useState hook. The useState hook accepts a parameter which is the initial value of the state. In class-based components, state is always an object</p>
            <h1 className='text-lg font-bold'>3.What Does useEffectother than load data?</h1>
            <p>Answer: After rendering finishes, useEffect will check the list of dependency values against the values from the last render, and will call your effect function if any one of them has changed.</p>
            <h1 className='text-lg font-bold'>3.How Does React Work?</h1>
            <p>Answer: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
        </div>
    );
};

export default Blogs;