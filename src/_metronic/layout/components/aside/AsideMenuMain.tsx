/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

interface ARRAY_JSON_CHILD extends Array<JSON_CHILD>{}

interface JSON_CHILD {
  to: string,
  title: string,
  hasBullet: boolean,
  child?: ARRAY_JSON_CHILD
}

interface ARRAY_JSON extends Array<JSON>{}

interface JSON {
  to: string,
  icon: string,
  title: string,
  fontIcon: string,
  child?: ARRAY_JSON_CHILD
}

export function AsideMenuMain() {
  const intl = useIntl()

  const json = [
    {
      to: '/dashboard',
      icon: '/media/icons/duotune/art/art002.svg',
      title: 'MENU.DASHBOARD',
      fontIcon: 'bi-app-indicator',
    },
    {
      to: '/builder',
      icon: '/media/icons/duotune/general/gen019.svg',
      title: 'Layout Builder',
      fontIcon: 'bi-layers',
    },
    {
      to: '/crafted/pages',
      icon: '/media/icons/duotune/general/gen022.svg',
      title: 'Pages',
      fontIcon: 'bi-archive',
      child: [
        {
          to: '/crafted/pages/profile',
          title: 'Profile',
          hasBullet: true,
          child: [
            {
              to: '/crafted/pages/profile/projects',
              title: 'Projects',
              hasBullet: true,
            },
            {
              to: '/crafted/profile/documents',
              title: 'Documents',
              hasBullet: true,
            },
            {
              to: '/crafted/profile/campaigns',
              title: 'Campaigns',
              hasBullet: true,
            },
            {
              to: '/crafted/profile/connections',
              title: 'Connections',
              hasBullet: true,
            },
          ],
        },
        {
          to: '/crafted/pages/wizards',
          title: 'Wizards',
          hasBullet: true,
          child: [
            {
              to: '/crafted/pages/wizards/horizontal',
              title: 'Horizontal',
              hasBullet: true,
            },
            {
              to: '/crafted/wizards/vertical',
              title: 'Vertical',
              hasBullet: true,
            },
          ],
        },
      ],
    },
  ]

  const RenderMenu = (json: ARRAY_JSON) => {
    var test = json.map((obj, index) => (
      <React.Fragment key={index}>
        {obj.child ? (
          <AsideMenuItemWithSub to={obj.to} icon={obj.icon} title={obj.title} fontIcon={obj.fontIcon}>
            {RenderSubMenu(obj.child)}
          </AsideMenuItemWithSub>
        ) : (
          <AsideMenuItem to={obj.to} icon={obj.icon} title={obj.title} fontIcon={obj.fontIcon} />
        )}
      </React.Fragment>
    ))

    return <>{test}</>
  }

  const RenderSubMenu = (arrChild: ARRAY_JSON_CHILD) => {
    var test = arrChild.map((obj, index) => (
      <React.Fragment key={index}>
        <AsideMenuItemWithSub to={obj.to} title={obj.title} hasBullet={obj.hasBullet}>
            {obj.child != undefined && 
              obj.child.map((childObj,childIndex) => (
                <React.Fragment key={childIndex}>
                  {childObj.child != undefined ? (
                    <>
                      {RenderSubMenu(childObj.child)}
                    </>
                  ) : (
                    <AsideMenuItem to={childObj.to} title={childObj.title} hasBullet={childObj.hasBullet} />
                  )   
                  }
                </React.Fragment>
              ))
            }
        </AsideMenuItemWithSub>
      </React.Fragment>
    ))
    return <>{test}</>
  }

  // return <>{RenderMenu(json)}</>

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Layout Builder'
        fontIcon='bi-layers'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Pages'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <AsideMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} />
          <AsideMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <AsideMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/error'
        title='Errors'
        fontIcon='bi-sticky'
        icon='/media/icons/duotune/general/gen040.svg'
      >
        <AsideMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/widgets'
        title='Widgets'
        icon='/media/icons/duotune/general/gen025.svg'
        fontIcon='bi-layers'
      >
        <AsideMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
      </AsideMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </AsideMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>
        </a>
      </div>
    </>
  )
}
