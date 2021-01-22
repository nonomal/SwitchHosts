/**
 * List
 * @author: oldj
 * @homepage: https://oldj.net
 */

import { useModel } from '@@/plugin-model/useModel'
import ListItem from '@renderer/components/LeftPanel/ListItem'
import SystemHostsItem from '@renderer/components/LeftPanel/SystemHostsItem'
import React from 'react'
import styles from './List.less'

interface Props {
}

const List = (props: Props) => {
  const { hosts_data } = useModel('useHostsData')

  return (
    <div className={styles.root}>
      <SystemHostsItem/>
      {hosts_data.list?.map(item => (
        <ListItem data={item} key={item.id}/>
      ))}
    </div>
  )
}

export default List