import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CompanyLayout from './layout/CompanyLayout'
import ProfileLayout from './layout/ProfileLayout'
import ProfileInfo from './pages/profile/ProfileInfo'
import EditLogin from './pages/profile/EditLogin'
import ConnectedApp from './pages/profile/ConnectedApp'
import Notification from './pages/profile/Notification'
import Password from './pages/profile/Password'
import CompanyInfo from './pages/company/CompanyInfo'
import ExpenseAllocation from './pages/company/ExpenseAllocation'
import ServiceAccounts from './pages/company/ServiceAccounts'
import Sso from './pages/company/Sso'
import Trades from './pages/company/Trades'
import UomList from './pages/company/UomList'
import Wbs from './pages/company/Wbs'
import Webhooks from './pages/company/Webhooks'
import Dates from './pages/project/Dates'
import Defaults from './pages/project/Defaults'
import Fieldset from './pages/project/Fieldset'
import CustomFieldset from './pages/project/CustomFieldset'
import Roles from './pages/project/Roles'
import Bidding from './pages/toolSett/Bidding'
import BudgetNav from './pages/toolSett/budget/BudgetNav'
import BudgetView from './pages/toolSett/budget/BudgetView'
import Forecasting from './pages/toolSett/budget/Forecasting'
import Migration from './pages/toolSett/budget/Migration'
import ManageNav from './pages/toolSett/management/ManageNav'
import EventConfig from './pages/toolSett/management/EventConfig'
import FieldsetMng from './pages/toolSett/management/FieldsetMng'
import CustomFieldMng from './pages/toolSett/management/CustomFieldMng'
import ConfViews from './pages/toolSett/management/ConfViews'
import CcoNav from './pages/toolSett/cco/CcoNav'
import ContractSettings from './pages/toolSett/cco/ContractSettings'
import CcoSettings from './pages/toolSett/cco/CcoSettings'
import CcoFieldset from './pages/toolSett/cco/CcoFieldset'
import CcoCustomField from './pages/toolSett/cco/CcoCustomField'
import ConnManager from './pages/toolSett/ConnManager'
import CorresNav from './pages/toolSett/correspondence/CorresNav'
import Types from './pages/toolSett/correspondence/Types'
import CorresFieldset from './pages/toolSett/correspondence/CorresFieldset'
import CorresCustomset from './pages/toolSett/correspondence/CorresCustomset'
import Statuses from './pages/toolSett/correspondence/Statuses'
import Directory from './pages/toolSett/Directory'
import DlNav from './pages/toolSett/dailylog/DlNav'
import DlTypes from './pages/toolSett/dailylog/DlTypes'
import DlFieldset from './pages/toolSett/dailylog/DlFieldset'
import DlCustomset from './pages/toolSett/dailylog/DlCustomset'
import DocNav from './pages/toolSett/projectdocs/DocNav'
import DocFieldset from './pages/toolSett/projectdocs/DocFieldset'
import DocCustomset from './pages/toolSett/projectdocs/DocCustomset'
import DrwNav from './pages/toolSett/drawing/DrwNav'
import DrwFieldset from './pages/toolSett/drawing/DrwFieldset'
import DrwCustomset from './pages/toolSett/drawing/DrwCustomset'
import MeetNav from './pages/toolSett/meetings/MeetNav'
import MeetTemp from './pages/toolSett/meetings/MeetTemp'
import PDFConfig from './pages/toolSett/meetings/PDFConfig'
import RFISnav from './pages/toolSett/rfis/RFISnav'
import RFISfieldset from './pages/toolSett/rfis/RFISfieldset'
import RFIScustomset from './pages/toolSett/rfis/RFIScustomset'
import SpecNav from './pages/toolSett/specifications/SpecNav'
import SpecFieldset from './pages/toolSett/specifications/SpecFieldset'
import SpecCustomset from './pages/toolSett/specifications/SpecCustomset'
import SubNav from './pages/toolSett/submittals/SubNav'
import General from './pages/toolSett/submittals/General'
import SubFieldset from './pages/toolSett/submittals/SubFieldset'
import SubCustomset from './pages/toolSett/submittals/SubCustomset'
import Task from './pages/toolSett/Task'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import HomeLayout from './layout/HomeLayout'
import Home from './pages/home/Home'
import ViewProject from './pages/home/ViewProject'
import ProjectNav from './pages/home/projects/ProjectNav'
import ExecutiveDashboard from './pages/home/projects/ExecutiveDashboard'
import HealthDashboard from './pages/home/projects/HealthDashboard'
import OpenItems from './pages/home/projects/OpenItems'
import BudgetVariance from './pages/home/projects/BudgetVariance'
import ContractVariance from './pages/home/projects/ContractVariance'
import ContractSummary from './pages/home/projects/ContractSummary'
import CmtSummary from './pages/home/projects/CmtSummary'
import ProjectInvites from './pages/home/ProjectInvites'
import Contacts from './pages/home/Contacts'
import Calendar from './pages/home/Calendar'
import TimeCards from './pages/home/TimeCards'
import Reports from './pages/home/Reports'
import NavSettings from './pages/home/settings/NavSettings'
import AccountInfo from './pages/home/settings/AccountInfo'
import UserTypes from './pages/home/settings/UserTypes'
import Users from './pages/home/settings/Users'
import PmLayout from './layout/PmLayout'
import Qso from './pages/pm/Qso'
import ProjectMgm from './pages/pm/ProjectMgm'
import Schedule from './pages/pm/Schedule'
import GanttChart from './pages/pm/Gantt'
import InspectionTemp from './pages/pm/InspectionTemp'
import Recycle from './pages/pm/Recycle'
import { Provider } from 'react-redux'
import { store } from './App/store'
import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/view-project',
          element: <ViewProject />
        },
        {
          path: '/projects',
          element: <ProjectNav />,
          children: [
            {
              path: '/projects/executive-dashboard',
              element: <ExecutiveDashboard />
            },
            {
              path: '/projects/health-dashboard',
              element: <HealthDashboard />
            },
            {
              path: '/projects/open-items',
              element: <OpenItems />
            },
            {
              path: '/projects/financial/budget-variance',
              element: <BudgetVariance />
            },
            {
              path: '/projects/financial/contract-variance',
              element: <ContractVariance />
            },
            {
              path: '/projects/financial/contract-summary',
              element: <ContractSummary />
            },
            {
              path: '/projects/financial/commitment-summary',
              element: <CmtSummary />
            }
          ]
        },
        {
          path: '/project-invites',
          element: <ProjectInvites />
        },
        {
          path: '/contacts',
          element: <Contacts />
        },
        {
          path: '/calendar',
          element: <Calendar />
        },
        {
          path: '/timecards',
          element: <TimeCards />
        },
        {
          path: '/reports',
          element: <Reports />
        },
        {
          path: '/settings',
          element: <NavSettings />,
          children: [
            {
              path: '/settings/account-info',
              element: <AccountInfo />
            },
            {
              path: '/settings/user-types',
              element: <UserTypes />
            },
            {
              path: '/settings/users',
              element: <Users />
            }
          ]
        }
      ]
    },
    {
      path: '/pm',
      element: <PmLayout />,
      children: [
        {
          path: '/pm/quality-and-safety',
          element: <Qso />
        },
        {
          path: '/pm/project-management',
          element: <ProjectMgm />
        },
        {
          path: '/pm/schedule',
          element: <Schedule />
        },
        {
          path: '/pm/gantt',
          element: <GanttChart />
        },
        {
          path: '/pm/inspection',
          element: <InspectionTemp />
        },
        {
          path: '/pm/recycle',
          element: <Recycle />
        }
      ]
    },
    {
      path: '/company',
      element: <CompanyLayout />,
      children: [
        {
          path: '/company/info',
          element: <CompanyInfo />
        },
        {
          path: '/company/expense-allocation',
          element: <ExpenseAllocation />
        },
        {
          path: '/company/service-accounts',
          element: <ServiceAccounts />
        },
        {
          path: '/company/sso',
          element: <Sso />
        },
        {
          path: '/company/trades',
          element: <Trades />
        },
        {
          path: '/company/uom-master-list',
          element: <UomList />
        },
        {
          path: '/company/wbs',
          element: <Wbs />
        },
        {
          path: '/company/webhooks',
          element: <Webhooks />
        }
      ]
    },
    {
      path: '/project',
      element: <CompanyLayout />,
      children: [
        {
          path: '/project/dates',
          element: <Dates />
        },
        {
          path: '/project/defaults',
          element: <Defaults />
        },
        {
          path: '/project/fieldset',
          element: <Fieldset />
        },
        {
          path: '/project/custom-fieldset',
          element: <CustomFieldset />
        },
        {
          path: '/project/roles',
          element: <Roles />
        }
      ]
    },
    {
      path: '/tool',
      element: <CompanyLayout />,
      children: [
        {
          path: '/tool/bidding',
          element: <Bidding />
        },
        {
          path: '/tool/budget',
          element: <BudgetNav />,
          children: [
            {
              path: '/tool/budget/view',
              element: <BudgetView />
            },
            {
              path: '/tool/budget/forecasting',
              element: <Forecasting />
            },
            {
              path: '/tool/budget/change-migration',
              element: <Migration />
            }
          ]
        },
        {
          path: '/tool/management',
          element: <ManageNav />,
          children: [
            {
              path: '/tool/management/event-config',
              element: <EventConfig />
            },
            {
              path: '/tool/management/fieldset',
              element: <FieldsetMng />
            },
            {
              path: '/tool/management/custom-fields',
              element: <CustomFieldMng />
            },
            {
              path: '/tool/management/conf-views',
              element: <ConfViews />
            }
          ]
        },
        {
          path: '/tool/cco',
          element: <CcoNav />,
          children: [
            {
              path: '/tool/cco/contract-settings',
              element: <ContractSettings />
            },
            {
              path: '/tool/cco/co-settings',
              element: <CcoSettings />
            },
            {
              path: '/tool/cco/fieldset',
              element: <CcoFieldset />
            },
            {
              path: '/tool/cco/custom-fields',
              element: <CcoCustomField />
            }
          ]
        },
        {
          path: '/tool/connection-manager',
          element: <ConnManager />
        },
        {
          path: '/tool/correspondence',
          element: <CorresNav />,
          children: [
            {
              path: '/tool/correspondence/types',
              element: <Types />
            },
            {
              path: '/tool/correspondence/fieldset',
              element: <CorresFieldset />
            },
            {
              path: '/tool/correspondence/custom-fields',
              element: <CorresCustomset />
            },
            {
              path: '/tool/correspondence/statuses',
              element: <Statuses />
            }
          ]
        },
        {
          path: '/tool/directory',
          element: <Directory />
        },
        {
          path: '/tool/dailylog',
          element: <DlNav />,
          children: [
            {
              path: '/tool/dailylog/types',
              element: <DlTypes />
            },
            {
              path: '/tool/dailylog/fieldset',
              element: <DlFieldset />
            },
            {
              path: '/tool/dailylog/custom-fields',
              element: <DlCustomset />
            }
          ]
        },
        {
          path: '/tool/project-docs',
          element: <DocNav />,
          children: [
            {
              path: '/tool/project-docs/fieldset',
              element: <DocFieldset />
            },
            {
              path: '/tool/project-docs/custom-fields',
              element: <DocCustomset />
            }
          ]
        },
        {
          path: '/tool/drawing',
          element: <DrwNav />,
          children: [
            {
              path: '/tool/drawing/fieldset',
              element: <DrwFieldset />
            },
            {
              path: '/tool/drawing/custom-fields',
              element: <DrwCustomset />
            }
          ]
        },
        {
          path: '/tool/meeting',
          element: <MeetNav />,
          children: [
            {
              path: '/tool/meeting/templates',
              element: <MeetTemp />
            },
            {
              path: '/tool/meeting/pdf-config',
              element: <PDFConfig />
            }
          ]
        },
        {
          path: '/tool/rfis',
          element: <RFISnav />,
          children: [
            {
              path: '/tool/rfis/fieldset',
              element: <RFISfieldset />
            },
            {
              path: '/tool/rfis/custom-fields',
              element: <RFIScustomset />
            }
          ]
        },
        {
          path: '/tool/specification',
          element: <SpecNav />,
          children: [
            {
              path: '/tool/specification/fieldset',
              element: <SpecFieldset />
            },
            {
              path: '/tool/specification/custom-fields',
              element: <SpecCustomset />
            }
          ]
        },
        {
          path: '/tool/submittals',
          element: <SubNav />,
          children: [
            {
              path: '/tool/submittals/general',
              element: <General />
            },
            {
              path: '/tool/submittals/fieldset',
              element: <SubFieldset />
            },
            {
              path: '/tool/submittals/custom-fields',
              element: <SubCustomset />
            }
          ]
        },
        {
          path: '/tool/task',
          element: <Task />
        }
      ]
    },
    {
      path: '/profile',
      element: <ProfileLayout />,
      children: [
        {
          path: '/profile/info',
          element: <ProfileInfo />
        },
        {
          path: '/profile/login',
          element: <EditLogin />
        },
        {
          path: '/profile/connectedapp',
          element: <ConnectedApp />
        },
        {
          path: '/profile/notification',
          element: <Notification />
        },
        {
          path: '/profile/password',
          element: <Password />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    }
  ])

  return (

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  )
}

export default App
