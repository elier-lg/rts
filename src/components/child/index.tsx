interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return <>
        <button onClick={onClick}>click me</button>
    </>;
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return (
        <>
            <br/>
            <button onClick={onClick}>click me</button>
            <br/>
            {children}
        </>
    );
};
