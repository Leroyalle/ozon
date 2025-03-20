import { useClickOutside } from '../use-click-outside';

export const TestComponent = ({ onClickOutside }: { onClickOutside: () => void }) => {
  const ref = useClickOutside<HTMLDivElement>(onClickOutside);

  return (
    <div>
      <div
        data-testid="inside"
        ref={ref}
        style={{ width: '100px', height: '100px', background: 'lightgray' }}>
        Внутри
      </div>
      <div
        data-testid="outside"
        style={{ width: '100px', height: '100px', background: 'lightblue' }}>
        Снаружи
      </div>
    </div>
  );
};
