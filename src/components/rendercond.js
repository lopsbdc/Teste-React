const RenderCond = ({ x }) => {

    return (
        <div>
            {x > 5 && <p> X é maior do que 5 </p>}
            {x > 5 ? <p>X é alto </p> : <p> X é baixo </p>}
        </div>
    );
};

export default RenderCond;