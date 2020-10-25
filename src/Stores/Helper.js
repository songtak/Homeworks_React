import { useContext } from "react";
import { MobXProviderContext, useObserver } from "mobx-react";

// MobX와 Hook을 동시에 사용하기 위해서는 다음과 같은 Wrapper가 필요하다.
const useStore = () => useContext(MobXProviderContext);

// MobX와 Hook을 class 컴포넌트의 inject처럼 사용하기 위해서는 다음과 같은 Wrapper가 필요하다.
const useInject = (selector, baseComponent) => {
  const component = (ownProps) => {
    const store = useStore();

    /*eslint react-hooks/rules-of-hooks: "off"*/
    return useObserver(() => baseComponent(selector(store, ownProps)));
  };

  component.displayName = baseComponent.name;

  return component;
};

export { useStore, useInject };
