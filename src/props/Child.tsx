interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;  // a fix for 'children' does not exist on type 'ChildProps'
}

export const Child = ({ color, onClick }: ChildProps) => {
    return <div>
        { color }
        <button onClick={onClick}>Click me</button>
        </div>
};

// Child wil be a React function component
// Child might have properties assigned to it like 'propTypes' and 'contextTypes'
// Child will receive props of type 'ChildProps'
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
    return <div>
    { color }
    <button onClick={onClick}>Click me</button>
    </div>
};

// ChildAsFC.displayName