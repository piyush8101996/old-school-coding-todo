const List = (props) => {
    console.log('List Component =======>>');
    /*
    ['a','b','c'] ==> [<li>a</li>, <li>b</li>, <li>c</li>];
    1. Below function is used to convert array of string to array of jsx to show all 
    unorder list items.
    2. Need to pass unique key props in array of jsx 
    */
    const list = props.value.map((item, index)=>{
        return (
            <li key={index}>{item}</li>
        );
    });


    return(
        <ul>{list}</ul>
    );
};

export default List;