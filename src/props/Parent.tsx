import { ChildAsFC } from './Child';

function Parent() {
    return <ChildAsFC color="red" onClick={ () => console.log('Clicked')}>
 
        </ChildAsFC>
};

export default Parent;