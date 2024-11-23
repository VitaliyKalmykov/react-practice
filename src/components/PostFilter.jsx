import React from 'react';
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput placeholder="Search..." value={filter.query}
                     onChange={event => setFilter({...filter, query: event.target.value})}/>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={"Sort by:"}
                options={[
                    {
                        value: "title", name: 'By title'
                    },
                    {
                        value: 'body', name: 'By description'
                    }]}
            />
        </div>
    );
};

export default PostFilter;