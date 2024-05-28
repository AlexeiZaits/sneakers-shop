import { Basket, Header, Sidebar } from '@/widgets/index';
import { IChildren } from '@/shared/lib/interfaces';
import styles from "./styles.module.scss";

export function App({children}:IChildren) {

  return (
      <div className={styles.app}>
        <Sidebar />
        <Basket />
        <Header />
        {children}
    </div>
    
  );
}
