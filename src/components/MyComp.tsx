import * as React from 'react';

/*
type MyCompProps = {
  name: 'hohoya' | 'interviewnest'
};
*/
interface MyCompProps {
  name: 'hohoya' | 'interviewnest';
}

const MyComp = (props: MyCompProps) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default MyComp;