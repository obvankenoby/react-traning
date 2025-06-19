import type { ComponentType } from 'react';

interface WithLoadedProps {
  isLoaded: boolean;
}

export function withLoaded<T extends object>(
  WrappedComponent: ComponentType<T>
): ComponentType<T & WithLoadedProps> {
  return function (props: T & WithLoadedProps) {
    const { isLoaded, ...restProps } = props;

    return isLoaded ? <div>Loading</div> : <WrappedComponent {...(restProps as T)} />;
  };
}
