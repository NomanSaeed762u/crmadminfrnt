import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import {Popover}  from '@mui/material'; 
import IconButton from '@mui/material/IconButton';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import PeopleIcon from '@mui/icons-material/People';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SmartToySharpIcon from '@mui/icons-material/SmartToySharp';
import PageviewIcon from '@mui/icons-material/Pageview';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import WorkIcon from '@mui/icons-material/Work';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CampaignIcon from '@mui/icons-material/Campaign';
import ChangeCircleSharpIcon from '@mui/icons-material/ChangeCircleSharp';
import ContactsIcon from '@mui/icons-material/Contacts';
import ListItemButton from '@mui/material/ListItemButton';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListItemIcon from '@mui/material/ListItemIcon'; 
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Navigate, useNavigate,} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import '../Style.css'


const drawerWidth = 240;

interface Props {
  window?: () => Window;
}
export default function ResponsiveDrawer(props: Props) {
  const navigate = useNavigate();
  const { window } = props;
  const [leadTrackMenu, setLeadTrack] = React.useState(null);
  const [communitycloudMenu, setCommunityCLoud] = React.useState(null);
  const [appexchangemarketMenu, setAppExchangeMarket] = React.useState(null);
  const [MarkcldintMenu, setMarketingCloudIntegration] = React.useState(null);
  const [pvtcloudintegrationMenu, setPvtCloudIntegration] = React.useState(null);
  const [aiintegrationMenu, setAiIntegration] = React.useState(null);
  const [usertranandsuppMenu, setUserTrainingAndSupport] = React.useState(null);
  const [marketingroitrackingMenu, setMarketingRoiTracking] = React.useState(null);
  const [customersupportintegrationMenu, setCustomerSupportIntegration] = React.useState(null);
  const [socialmedmonandintMenu, setSocialMediaMonitoringAndIntegration] = React.useState(null);
  const [leadgenerationformsMenu, setLeadGenerationForms] = React.useState(null);
  const [customAndScalMenu, setCustomAndScal] = React.useState(null);
  const [mobileaccessibilityMenu, setMobileAccessibility] = React.useState(null);
  const [externalintegrationMenu, setExternalIntegration] = React.useState(null);
  const [workFlowAutomationMenu, setWorkFlowAutomation] = React.useState(null);
  const [taskAndCalendarManagementMenu, setTaskAndCalendarManagement] = React.useState(null);
  const [analyticsAndReportsMenu, setAnalyticsAndReports] = React.useState(null);
  const [leadScoringMenu, setLeadScoring] = React.useState(null);
  const [customerSegMenu, setCustomerSeg] = React.useState(null);
  const [campgnMngMenu, setCampgMng] = React.useState(null);
  const [salesfnlmngMenu, setSalesFnlMng] = React.useState(null);
  const [contactMenu, setContactMenu] = React.useState(null);
  const [emailMarketingMenu, setEmailMarketingMenu] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (menuName, event) => {
    switch (menuName) {
      case 'salesfnlmng':
        setSalesFnlMng(event.currentTarget);
        break;
        case 'communitycloud':
        setCommunityCLoud(event.currentTarget);
        break;
        case 'appexchangemarket':
        setAppExchangeMarket(event.currentTarget);
        break;
        case 'Markcldint':
        setMarketingCloudIntegration(event.currentTarget);
        break;
        case 'pvtcloudintegration':
        setPvtCloudIntegration(event.currentTarget);
        break;
        case 'aiintegration':
        setAiIntegration(event.currentTarget);
        break;
        case 'usertranandsupp':
        setUserTrainingAndSupport(event.currentTarget);
        break;
        case 'customAndScal':
        setCustomAndScal(event.currentTarget);
        break;
        case 'customAndScal':
        setCustomAndScal(event.currentTarget);
        break;
        case 'customersupportintegration':
        setCustomerSupportIntegration(event.currentTarget);
        break;
        case 'socialmedmonandint':
        setSocialMediaMonitoringAndIntegration(event.currentTarget);
        break;
        case 'leadgenerationforms':
        setLeadGenerationForms(event.currentTarget);
        break;
        case 'mobileaccessibility':
        setMobileAccessibility(event.currentTarget);
        break;
        case 'externalintegration':
           setExternalIntegration(event.currentTarget);
        break;
        case 'workFlowAutomation':
        setWorkFlowAutomation(event.currentTarget);
        break;
        case 'taskAndCalendarManagement':
        setTaskAndCalendarManagement(event.currentTarget);
        break;
        case 'analyticsAndReports':
        setAnalyticsAndReports(event.currentTarget);
        break;
        case 'customerSeg':
        setCustomerSeg(event.currentTarget);
        break;
        case 'campgnmng':
          setCampgMng(event.currentTarget);
          break;
        case 'contact':
        setContactMenu(event.currentTarget);
        break;
        case 'leadTrack':
          setLeadTrack(event.currentTarget);
          break;
      case 'emailMarketing':
        setEmailMarketingMenu(event.currentTarget);
        break;
        case 'leadScoring':
        setLeadScoring(event.currentTarget);
        break;
      // Add more cases for other menus as needed
      default:
        break;
    }
  };

  const handleMenuClose = (menuName) => {
    switch (menuName) {
         case 'leadTrack':
          setLeadTrack(null);
          break;
          case 'communitycloud':
          setCommunityCLoud(null);
          break;
          case 'appexchangemarket':
          setAppExchangeMarket(null);
          break;
          case 'Markcldint':
          setMarketingCloudIntegration(null);
          break;
          case 'pvtcloudintegration':
          setPvtCloudIntegration(null);
          break;
          case 'aiintegration':
          setAiIntegration(null);
          break;
          case 'usertranandsupp':
          setUserTrainingAndSupport(null);
          break;
          case 'marketingroitracking':
          setMarketingRoiTracking(null);
          break;
          case 'customersupportintegration':
          setCustomerSupportIntegration(null);
          break;
          case 'customAndScal':
          setCustomAndScal(null);
          break;
          case 'socialmedmonandint':
          setSocialMediaMonitoringAndIntegration(null);
          break;
          case 'leadgenerationforms':
          setLeadGenerationForms(null);
          break;
          case 'mobileaccessibility':
          setMobileAccessibility(null);
          break;
          case 'externalintegration':
          setExternalIntegration(null);
          break;
          case 'taskAndCalendarManagement':
          setTaskAndCalendarManagement(null);
          break;
          case 'workFlowAutomation':
          setWorkFlowAutomation(null);
          break;
          case 'analyticsAndReports':
          setAnalyticsAndReports(null);
          break;
          case 'customerSeg':
          setCustomerSeg(null);
          break;
         case 'salesfnlmng':
          setSalesFnlMng(null);
          break;
          case 'campgnmng':
            setCampgMng(null);
          break;

         case 'contact':
        setContactMenu(null);
        break;
      case 'emailMarketing':
        setEmailMarketingMenu(null);
        break;
        case 'leadScoring':
        setLeadScoring(null);
        break;
      // Add more cases for other menus as needed
      default:
        break;
    }
  };

  const drawer = (
    <div>
      
      <Toolbar/>
      <Divider/>
      
      <List>
         {/*Dashboard*/}
        <ListItem disablePadding onClick={() => navigate("/")}>
          <ListItemButton onClick={(event) => handleMenuOpen('dashboard', event)}>
            <ListItemIcon>
            <DashboardIcon/>
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItemButton>
        </ListItem>
           {/*Contact Management*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('contact', event)}>
            <ListItemIcon>
              <ContactsIcon/>
            </ListItemIcon>
            <ListItemText>Contact Management</ListItemText>
          </ListItemButton>
          <Popover
            anchorEl={contactMenu}
            open={Boolean(contactMenu)}
            onClose={() => handleMenuClose('contact')}
              anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{ minWidth:240 }}>
          
<MenuItem onClick={() => navigate("/contact-info")}>Contact Information</MenuItem>
<MenuItem onClick={() => navigate("/leadsource")}>Lead Source</MenuItem>
<MenuItem onClick={() => navigate("/Companyinformation")}>Company Information</MenuItem>
<MenuItem onClick={() => navigate("/leadScore")}>Lead Scoring</MenuItem>
<MenuItem onClick={() => navigate("/leadstatus")}>Lead Status</MenuItem>
<MenuItem onClick={() => navigate("/communicationhistory")}>Communication History</MenuItem>
<MenuItem onClick={() => navigate("/leadtaglabel")}>Lead Tags or Labels</MenuItem>
<MenuItem onClick={() => navigate("/leadnotecomment")}>Lead Notes or Comments</MenuItem>
<MenuItem onClick={() => {}}>Lead Activity Tracking</MenuItem>
<MenuItem onClick={() => {}}>Lead Conversion Information</MenuItem>
<MenuItem onClick={() => {}}>Lead Engagement History</MenuItem>
<MenuItem onClick={() => {}}>Custom Fields and Attributes</MenuItem>
<MenuItem onClick={() => {}}>Lead Ownership and Assignment</MenuItem>
<MenuItem onClick={() => {}}>GDPR and Data Compliance</MenuItem>
<MenuItem onClick={() => {}}>Data Import and Export</MenuItem>
<MenuItem onClick={() => {}}>Data Deduplication</MenuItem>
<MenuItem onClick={() => {}}>Search and Filter Capabilities</MenuItem>
          </Box>
          </Popover>
        </ListItem>
        {/*Leat Tracking*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('leadTrack', event)}>
            <ListItemIcon>
              <LeaderboardIcon />
            </ListItemIcon>
            <ListItemText>Lead Tracking</ListItemText>
          </ListItemButton>
          <Popover
            anchorEl={leadTrackMenu}
            open={Boolean(leadTrackMenu)}
            onClose={() => handleMenuClose('leadTrack')}
             anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}  
        >
        <Box sx={{ minWidth: 200 }}>
<MenuItem onClick={() => {}}>Lead Source</MenuItem>
<MenuItem onClick={() => {}}>Lead Contact Information</MenuItem>
<MenuItem onClick={() => {}}>Lead Status</MenuItem>
<MenuItem onClick={() => {}}>Lead Interaction History</MenuItem>
<MenuItem onClick={() => {}}>Lead Score</MenuItem>
<MenuItem onClick={() => {}}>Lead Notes</MenuItem>
<MenuItem onClick={() => {}}>Lead Timeline</MenuItem>
<MenuItem onClick={() => {}}>Lead Assignment</MenuItem>
<MenuItem onClick={() => {}}>Lead Tags</MenuItem>
<MenuItem onClick={() => {}}>Company Information</MenuItem>
<MenuItem onClick={() => {}}>Lead Conversion Tracking</MenuItem>
<MenuItem onClick={() => {}}>Lead Communication History</MenuItem>
          </Box>
          </Popover>
        </ListItem>
        {/*Email Marketing Integration*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('emailMarketing', event)}>
            <ListItemIcon>
              <MarkEmailUnreadIcon/>
            </ListItemIcon>
            <ListItemText>Email Marketing Integration</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={emailMarketingMenu}
            open={Boolean(emailMarketingMenu)}
            onClose={() => handleMenuClose('emailMarketing')} >
            <MenuItem onClick={() => {}}>Email Marketing Platform API</MenuItem>
            <MenuItem onClick={() => {}}>Contact Synchronization</MenuItem>
            <MenuItem onClick={() => {}}>Email Campaign Templates</MenuItem>
            <MenuItem onClick={() => {}}>Subscriber List Management</MenuItem>
            <MenuItem onClick={() => {}}>Automated Email Workflows</MenuItem>
            <MenuItem onClick={() => {}}>Personalization Variables</MenuItem>
            <MenuItem onClick={() => {}}>A/B Testing</MenuItem>
            <MenuItem onClick={() => {}}>Email Performance Analytics</MenuItem>
            <MenuItem onClick={() => {}}>Drip Campaigns</MenuItem>
            <MenuItem onClick={() => {}}>Campaign Automation Triggers</MenuItem>
            <MenuItem onClick={() => {}}>Email Campaign Reporting</MenuItem>
            <MenuItem onClick={() => {}}>Email List Segmentation</MenuItem>
            <MenuItem onClick={() => {}}>Email Deliverability Tracking</MenuItem>
            <MenuItem onClick={() => {}}>Unsubscribe and Compliance</MenuItem>
            <MenuItem onClick={() => {}}>Email Campaign Scheduler</MenuItem>
             </Menu>
         </ListItem>
        {/*Sales Funnel Management */}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('salesfnlmng', event)}>
            <ListItemIcon>
              <LoyaltyIcon />
            </ListItemIcon>
            <ListItemText>Sales Funnel Management</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={salesfnlmngMenu}
            open={Boolean(salesfnlmngMenu)}
            onClose={() => handleMenuClose('salesfnlmng')}
          >
            <MenuItem onClick={() => {}}>Contact Information</MenuItem>
<MenuItem onClick={() => {}}>Lead Source</MenuItem>
<MenuItem onClick={() => {}}>Company Information</MenuItem>
<MenuItem onClick={() => {}}>Lead Scoring</MenuItem>
<MenuItem onClick={() => {}}>Lead Status</MenuItem>
<MenuItem onClick={() => {}}>Communication History</MenuItem>
<MenuItem onClick={() => {}}>Lead Tags or Labels</MenuItem>
<MenuItem onClick={() => {}}>Lead Notes or Comments</MenuItem>
<MenuItem onClick={() => {}}>Lead Activity Tracking</MenuItem>
<MenuItem onClick={() => {}}>Lead Conversion Information</MenuItem>
<MenuItem onClick={() => {}}>Lead Engagement History</MenuItem>
<MenuItem onClick={() => {}}>Custom Fields and Attributes</MenuItem>
<MenuItem onClick={() => {}}>Lead Ownership and Assignment</MenuItem>
<MenuItem onClick={() => {}}>GDPR and Data Compliance</MenuItem>
<MenuItem onClick={() => {}}>Data Import and Export</MenuItem>
<MenuItem onClick={() => {}}>Data Deduplication</MenuItem>
<MenuItem onClick={() => {}}>Search and Filter Capabilities</MenuItem>
            </Menu>
        </ListItem>
        {/*Campaign Management*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('campgnmng', event)}>
            <ListItemIcon>
              <CampaignIcon/>
            </ListItemIcon>
            <ListItemText>Campaign Management</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={campgnMngMenu}
            open={Boolean(campgnMngMenu)}
            onClose={() => handleMenuClose('campgnmng')}>
            <MenuItem onClick={() => {}}>Campaign Planning</MenuItem>
            <MenuItem onClick={() => {}}>Multi-Channel Integration</MenuItem>
            <MenuItem onClick={() => {}}>Content Creation and Storage</MenuItem>
            <MenuItem onClick={() => {}}>Audience Segmentation</MenuItem>
            <MenuItem onClick={() => {}}>Campaign Scheduling</MenuItem>
            <MenuItem onClick={() => {}}>A/B Testing</MenuItem>
            <MenuItem onClick={() => {}}>Automated Workflows</MenuItem>
            <MenuItem onClick={() => {}}>Personalization</MenuItem>
            <MenuItem onClick={() => {}}>Email Marketing Integration</MenuItem>
            <MenuItem onClick={() => {}}>Social Media Management</MenuItem>
            <MenuItem onClick={() => {}}>Advertising Campaign Tracking</MenuItem>
            <MenuItem onClick={() => {}}>Landing Page Integration</MenuItem>
            <MenuItem onClick={() => {}}>Analytics and Reporting</MenuItem>
            <MenuItem onClick={() => {}}>ROI Measurement</MenuItem>
            <MenuItem onClick={() => {}}>Lead Attribution</MenuItem>
             </Menu>
            </ListItem>
            {/*Customer Segmentation*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('customerSeg', event)}>
            <ListItemIcon>
              <ReduceCapacityIcon />
            </ListItemIcon>
            <ListItemText>Customer Segmentation</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={customerSegMenu}
            open={Boolean(customerSegMenu)}
            onClose={() => handleMenuClose('customerSeg')}>
            <MenuItem onClick={() => {}}>Contact Segmentation</MenuItem>
            <MenuItem onClick={() => {}}>Demographic Filters</MenuItem>
            <MenuItem onClick={() => {}}>Behavioral Tracking</MenuItem>
            <MenuItem onClick={() => {}}>Purchase History</MenuItem>
            <MenuItem onClick={() => {}}>Lead Scoring</MenuItem>
            <MenuItem onClick={() => {}}>Custom Data Fields</MenuItem>
            <MenuItem onClick={() => {}}>Engagement Metrics</MenuItem>
            <MenuItem onClick={() => {}}>Email Engagement History</MenuItem>
            <MenuItem onClick={() => {}}>Customer Journey Stages</MenuItem>
            <MenuItem onClick={() => {}}>Geographic Location</MenuItem>
            <MenuItem onClick={() => {}}>Industry or Vertical</MenuItem>
            <MenuItem onClick={() => {}}>Customer Persona</MenuItem>
            <MenuItem onClick={() => {}}>Lead Source</MenuItem>
            <MenuItem onClick={() => {}}>Lead Status</MenuItem>
            <MenuItem onClick={() => {}}>Behavioral Triggers</MenuItem>
            <MenuItem onClick={() => {}}>Email List Management</MenuItem>
            <MenuItem onClick={() => {}}>Dynamic Content Delivery</MenuItem>
            <MenuItem onClick={() => {}}>Campaign Automation</MenuItem>
              </Menu>
              </ListItem>
               {/*Lead Scoring*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('leadScoring', event)}>
            <ListItemIcon>
              <LeaderboardIcon />
            </ListItemIcon>
            <ListItemText>Lead Scoring</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={leadScoringMenu}
            open={Boolean(leadScoringMenu)}
            onClose={() => handleMenuClose('leadScoring')}>
            <MenuItem onClick={() => {}}>Lead Scoring</MenuItem>
            <MenuItem onClick={() => {}}>Engagement Tracking</MenuItem>
            <MenuItem onClick={() => {}}>Behavior-Based Scoring</MenuItem>
            <MenuItem onClick={() => {}}>Customizable Scoring Rules</MenuItem>
            <MenuItem onClick={() => {}}>Negative Scoring</MenuItem>
            <MenuItem onClick={() => {}}>Lead Source Scoring</MenuItem>
            <MenuItem onClick={() => {}}>Demographic Scoring</MenuItem>
            <MenuItem onClick={() => {}}>Predictive Scoring</MenuItem>
            <MenuItem onClick={() => {}}>Real-time Scoring Updates</MenuItem>
            <MenuItem onClick={() => {}}>Threshold-Based Prioritization</MenuItem>
            <MenuItem onClick={() => {}}>Lead Scoring Analytics</MenuItem>
            <MenuItem onClick={() => {}}>Integration with CRM</MenuItem>
            <MenuItem onClick={() => {}}>Lead Nurturing Workflows</MenuItem>
            <MenuItem onClick={() => {}}>Collaboration Tools</MenuItem>
            <MenuItem onClick={() => {}}>Lead Conversion Predictions</MenuItem>
            <MenuItem onClick={() => {}}>Scoring-Based Segmentation</MenuItem>
              </Menu>
              </ListItem>
             
               {/*Analytics and Reporting*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('analyticsAndReports', event)}>
            <ListItemIcon>
              <AnalyticsIcon/>
            </ListItemIcon>
            <ListItemText>Analytics and Reporting</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={analyticsAndReportsMenu}
            open={Boolean(analyticsAndReportsMenu)}
            onClose={() => handleMenuClose('analyticsAndReports')}>
            <MenuItem onClick={() => {}}>Reporting Dashboards</MenuItem>
            <MenuItem onClick={() => {}}>Predefined Report Templates</MenuItem>
            <MenuItem onClick={() => {}}>Custom Report Creation</MenuItem>
            <MenuItem onClick={() => {}}>Data Visualization</MenuItem>
            <MenuItem onClick={() => {}}>Real-time Reporting</MenuItem>
            <MenuItem onClick={() => {}}>Cross-channel Integration</MenuItem>
            <MenuItem onClick={() => {}}>Campaign Performance</MenuItem>
            <MenuItem onClick={() => {}}>Sales Pipeline Analysis</MenuItem>
            <MenuItem onClick={() => {}}>Lead Conversion Tracking</MenuItem>
            <MenuItem onClick={() => {}}>ROI Calculation</MenuItem>
            <MenuItem onClick={() => {}}>Customer Segmentation</MenuItem>
            <MenuItem onClick={() => {}}>Funnel Analysis</MenuItem>
            <MenuItem onClick={() => {}}>Lead Source Attribution</MenuItem>
            <MenuItem onClick={() => {}}>Revenue Forecasting</MenuItem>
            <MenuItem onClick={() => {}}>Email Campaign Analytics</MenuItem>
            <MenuItem onClick={() => {}}>Social Media Insights</MenuItem>
            <MenuItem onClick={() => {}}>Data Export and Sharing</MenuItem>
            <MenuItem onClick={() => {}}>Data Drill-down</MenuItem>
            <MenuItem onClick={() => {}}>Benchmarking</MenuItem>
            <MenuItem onClick={() => {}}>Scheduled Reports</MenuItem>
            <MenuItem onClick={() => {}}>Mobile Analytics Access</MenuItem>
              </Menu>
              </ListItem>
                 {/*Task and Calendar Management*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('taskAndCalendarManagement', event)}>
            <ListItemIcon>
              <LowPriorityIcon/>
            </ListItemIcon>
            <ListItemText>Task and Calendar Management</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={taskAndCalendarManagementMenu}
            open={Boolean(taskAndCalendarManagementMenu)}
            onClose={() => handleMenuClose('taskAndCalendarManagement')}>
            <MenuItem onClick={() => {}}>Calendar Integration</MenuItem>
            <MenuItem onClick={() => {}}>Appointment Scheduling</MenuItem>
            <MenuItem onClick={() => {}}>Task Management</MenuItem>
            <MenuItem onClick={() => {}}>Follow-up Reminders</MenuItem>
            <MenuItem onClick={() => {}}>Due Date Tracking</MenuItem>
            <MenuItem onClick={() => {}}>Recurring Appointments</MenuItem>
            <MenuItem onClick={() => {}}>Contact Integration</MenuItem>
            <MenuItem onClick={() => {}}>Collaborative Scheduling</MenuItem>
            <MenuItem onClick={() => {}}>Mobile Accessibility</MenuItem>
            <MenuItem onClick={() => {}}>Email Notifications</MenuItem>
            <MenuItem onClick={() => {}}>Appointment Confirmation</MenuItem>
            <MenuItem onClick={() => {}}>Integration with CRM Data</MenuItem>
            <MenuItem onClick={() => {}}>Time Zone Management</MenuItem>
            <MenuItem onClick={() => {}}>Customizable Fields</MenuItem>
            <MenuItem onClick={() => {}}>Follow-up Sequencing</MenuItem>
            <MenuItem onClick={() => {}}>Appointment Analytics</MenuItem>
            <MenuItem onClick={() => {}}>Calendar Sharing</MenuItem>
            <MenuItem onClick={() => {}}>Client Self-Scheduling</MenuItem>
             </Menu>
              </ListItem>
               {/*Workflow Automation*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('workFlowAutomation', event)}>
            <ListItemIcon>
              <WorkIcon/>
            </ListItemIcon>
            <ListItemText>Workflow Automation</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={workFlowAutomationMenu}
            open={Boolean(workFlowAutomationMenu)}
            onClose={() => handleMenuClose('workFlowAutomation')}>
            <MenuItem onClick={() => {}}>Workflow Automation</MenuItem>
            <MenuItem onClick={() => {}}>Trigger-Based Workflows</MenuItem>
            <MenuItem onClick={() => {}}>Lead Assignment Automation</MenuItem>
            <MenuItem onClick={() => {}}>Email Marketing Automation</MenuItem>
            <MenuItem onClick={() => {}}>Lead Scoring Triggers</MenuItem>
            <MenuItem onClick={() => {}}>Drip Campaigns</MenuItem>
            <MenuItem onClick={() => {}}>Personalized Content</MenuItem>
            <MenuItem onClick={() => {}}>Lead Qualification</MenuItem>
            <MenuItem onClick={() => {}}>Lead Segmentation</MenuItem>
            <MenuItem onClick={() => {}}>Task Reminders</MenuItem>
            <MenuItem onClick={() => {}}>Lead Follow-up Sequences</MenuItem>
            <MenuItem onClick={() => {}}>Analytics and Reporting</MenuItem>
            <MenuItem onClick={() => {}}>Social Media Automation</MenuItem>
            <MenuItem onClick={() => {}}>Lead Reengagement</MenuItem>
            <MenuItem onClick={() => {}}>Custom Workflow Creation</MenuItem>
            <MenuItem onClick={() => {}}>Workflow Testing</MenuItem>
            <MenuItem onClick={() => {}}>Integration Capabilities</MenuItem>
            <MenuItem onClick={() => {}}>A/B Testing Automation</MenuItem>
<MenuItem onClick={() => {}}>Lead Scoring Adjustments</MenuItem>
             </Menu>
              </ListItem>
                {/*External Intergration*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('externalintegration', event)}>
            <ListItemIcon>
              <IntegrationInstructionsIcon />
            </ListItemIcon>
            <ListItemText>External Integration</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={externalintegrationMenu}
            open={Boolean(externalintegrationMenu)}
            onClose={() => handleMenuClose('externalintegration')}>
            <MenuItem onClick={() => {}}>CRM Integration</MenuItem>
            <MenuItem onClick={() => {}}>Third-party Tool Integration</MenuItem>
            <MenuItem onClick={() => {}}>API Integration</MenuItem>
            <MenuItem onClick={() => {}}>Data Import and Export</MenuItem>
            <MenuItem onClick={() => {}}>Google Analytics Integration</MenuItem>
            <MenuItem onClick={() => {}}>Google Search Console</MenuItem>
            <MenuItem onClick={() => {}}>Social Media Integration</MenuItem>
            <MenuItem onClick={() => {}}>Marketing Automation Platforms</MenuItem>
            <MenuItem onClick={() => {}}>Email Marketing Integration</MenuItem>
            <MenuItem onClick={() => {}}>Advertising Platform Integration</MenuItem>
            <MenuItem onClick={() => {}}>Customer Support Integration</MenuItem>
            <MenuItem onClick={() => {}}>E-commerce Platform Integration</MenuItem>
            <MenuItem onClick={() => {}}>Lead Capture Tools Integration</MenuItem>
            <MenuItem onClick={() => {}}>Analytics and Reporting APIs</MenuItem>
            <MenuItem onClick={() => {}}>Data Mapping and Field Mapping</MenuItem>
            <MenuItem onClick={() => {}}>Real-time Data Sync</MenuItem>
            <MenuItem onClick={() => {}}>Multi-platform Management</MenuItem>
            <MenuItem onClick={() => {}}>Security and Access Control</MenuItem>
            <MenuItem onClick={() => {}}>Custom Integration Solutions</MenuItem>
            <MenuItem onClick={() => {}}>Integration Monitoring</MenuItem>
              </Menu>
              </ListItem>
              {/*Mobile Accessibility*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('mobileaccessibility', event)}>
            <ListItemIcon>
              <MobileFriendlyIcon />
            </ListItemIcon>
            <ListItemText>Mobile Accessibility</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={mobileaccessibilityMenu}
            open={Boolean(mobileaccessibilityMenu)}
            onClose={() => handleMenuClose('mobileaccessibility')}>
            <MenuItem onClick={() => {}}>Mobile App</MenuItem>
            <MenuItem onClick={() => {}}>Responsive Web Design</MenuItem>
            <MenuItem onClick={() => {}}>Data Sync</MenuItem>
            <MenuItem onClick={() => {}}>Offline Access</MenuItem>
            <MenuItem onClick={() => {}}>Contact and Lead Management</MenuItem>
            <MenuItem onClick={() => {}}>Task and Calendar Management</MenuItem>
            <MenuItem onClick={() => {}}>Email Integration</MenuItem>
            <MenuItem onClick={() => {}}>Sales Opportunity Tracking</MenuItem>
            <MenuItem onClick={() => {}}>Analytics and Reporting</MenuItem>
            <MenuItem onClick={() => {}}>Document Management</MenuItem>
            <MenuItem onClick={() => {}}>Location-Based Features</MenuItem>
            <MenuItem onClick={() => {}}>Push Notifications</MenuItem>
            <MenuItem onClick={() => {}}>Security and Authentication</MenuItem>
            <MenuItem onClick={() => {}}>User-Friendly Interface</MenuItem>
            <MenuItem onClick={() => {}}>Integration with Mobile Tools</MenuItem>
            <MenuItem onClick={() => {}}>Customizable Mobile Views</MenuItem>
            <MenuItem onClick={() => {}}>Mobile Access Control</MenuItem>
            <MenuItem onClick={() => {}}>Remote Collaboration</MenuItem>
            <MenuItem onClick={() => {}}>Offline Data Storage</MenuItem>
            <MenuItem onClick={() => {}}>Mobile Customer Support</MenuItem>
              </Menu>
              </ListItem>
                            {/*Lead Generation Forms*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('leadgenerationforms', event)}>
            <ListItemIcon>
              <LeaderboardIcon />
            </ListItemIcon>
            <ListItemText>Lead Generation Forms</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={leadgenerationformsMenu}
            open={Boolean(leadgenerationformsMenu)}
            onClose={() => handleMenuClose('leadgenerationforms')}>
            <MenuItem onClick={() => {}}>Form Builder</MenuItem>
            <MenuItem onClick={() => {}}>Custom Form Fields</MenuItem>
            <MenuItem onClick={() => {}}>Pre-built Templates</MenuItem>
            <MenuItem onClick={() => {}}>Mobile Responsiveness</MenuItem>
            <MenuItem onClick={() => {}}>Conditional Logic Forms</MenuItem>
            <MenuItem onClick={() => {}}>Progressive Profiling</MenuItem>
            <MenuItem onClick={() => {}}>A/B Testing for Forms</MenuItem>
            <MenuItem onClick={() => {}}>Multi-step Forms</MenuItem>
            <MenuItem onClick={() => {}}>Social Media Integration</MenuItem>
            <MenuItem onClick={() => {}}>CAPTCHA and Spam Protection</MenuItem>
            <MenuItem onClick={() => {}}>GDPR Compliance</MenuItem>
            <MenuItem onClick={() => {}}>Analytics and Conversion Tracking</MenuItem>
            <MenuItem onClick={() => {}}>Form Embedding Options</MenuItem>
            <MenuItem onClick={() => {}}>Lead Source Tracking</MenuItem>
            <MenuItem onClick={() => {}}>Auto-fill and Autofill</MenuItem>
            <MenuItem onClick={() => {}}>Data Validation</MenuItem>
            <MenuItem onClick={() => {}}>Form Submission Notifications</MenuItem>
            <MenuItem onClick={() => {}}>CRM Integration</MenuItem>
            <MenuItem onClick={() => {}}>Landing Page Integration</MenuItem>
            <MenuItem onClick={() => {}}>Thank You Pages</MenuItem>
            <MenuItem onClick={() => {}}>Lead Scoring</MenuItem>
              </Menu>
              </ListItem>
                  {/*Social Media Monitoring and Integration*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('socialmedmonandint', event)}>
            <ListItemIcon>
              <PageviewIcon />
            </ListItemIcon>
            <ListItemText>Social Media Monitoring and Integration
</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={socialmedmonandintMenu}
            open={Boolean(socialmedmonandintMenu)}
            onClose={() => handleMenuClose('socialmedmonandint')}>
            <MenuItem onClick={() => {}}>Social Media Integration</MenuItem>
            <MenuItem onClick={() => {}}>Social Media Monitoring</MenuItem>
            <MenuItem onClick={() => {}}>Prospect Tracking</MenuItem>
            <MenuItem onClick={() => {}}>Social Listening</MenuItem>
            <MenuItem onClick={() => {}}>Profile Enrichment</MenuItem>
            <MenuItem onClick={() => {}}>Social Media Engagement</MenuItem>
            <MenuItem onClick={() => {}}>Content Scheduling</MenuItem>
            <MenuItem onClick={() => {}}>Lead Scoring</MenuItem>
            <MenuItem onClick={() => {}}>Social Media Analytics</MenuItem>
            <MenuItem onClick={() => {}}>Hashtag Tracking</MenuItem>
            <MenuItem onClick={() => {}}>Social Media Automation</MenuItem>
            <MenuItem onClick={() => {}}>CRM Integration</MenuItem>
            <MenuItem onClick={() => {}}>Lead Segmentation</MenuItem>
            <MenuItem onClick={() => {}}>Social Media Reporting</MenuItem>
            <MenuItem onClick={() => {}}>Social Media Listening</MenuItem>
            <MenuItem onClick={() => {}}>Social Media Campaigns</MenuItem>
            <MenuItem onClick={() => {}}>Influencer Engagement</MenuItem>
            <MenuItem onClick={() => {}}>Competitive Analysis</MenuItem>
            <MenuItem onClick={() => {}}>CRM Mobile Access</MenuItem>
            <MenuItem onClick={() => {}}>Compliance and Privacy</MenuItem>
         
              </Menu>
              </ListItem>
                  {/*Customer Support Integration*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('customersupportintegration', event)}>
            <ListItemIcon>
              <SupportAgentIcon />
            </ListItemIcon>
            <ListItemText>Customer Support Integration</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={customersupportintegrationMenu}
            open={Boolean(customersupportintegrationMenu)}
            onClose={() => handleMenuClose('customersupportintegration')}>
            <MenuItem onClick={() => {}}>Customer Support Integration</MenuItem>
            <MenuItem onClick={() => {}}>Unified Customer Profiles</MenuItem>
            <MenuItem onClick={() => {}}>Ticketing System Integration</MenuItem>
            <MenuItem onClick={() => {}}>Support Ticket Tracking</MenuItem>
            <MenuItem onClick={() => {}}>Customer Interaction Logs</MenuItem>
            <MenuItem onClick={() => {}}>Support Ticket Assignment</MenuItem>
            <MenuItem onClick={() => {}}>Prioritization of Tickets</MenuItem>
            <MenuItem onClick={() => {}}>Real-time Collaboration</MenuItem>
            <MenuItem onClick={() => {}}>Escalation Workflows</MenuItem>
            <MenuItem onClick={() => {}}>Customer Feedback Capture</MenuItem>
            <MenuItem onClick={() => {}}>Knowledge Base Integration</MenuItem>
            <MenuItem onClick={() => {}}>Automated Ticket Creation</MenuItem>
            <MenuItem onClick={() => {}}>Support Performance Metrics</MenuItem>
            <MenuItem onClick={() => {}}>Multi-channel Support</MenuItem>
            <MenuItem onClick={() => {}}>Customer Satisfaction Surveys</MenuItem>
            <MenuItem onClick={() => {}}>Support Analytics</MenuItem>
            <MenuItem onClick={() => {}}>CRM Mobile Access</MenuItem>
            <MenuItem onClick={() => {}}>Integration Customization</MenuItem>
            <MenuItem onClick={() => {}}>Automated Follow-ups</MenuItem>
            <MenuItem onClick={() => {}}>Compliance and Privacy</MenuItem>
             </Menu>
              </ListItem>
                   {/*Marketing ROI Tracking*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('marketingroitracking', event)}>
            <ListItemIcon>
              <AssignmentReturnOutlinedIcon />
              
            </ListItemIcon>
            <ListItemText>Marketing ROI Tracking</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={marketingroitrackingMenu}
            open={Boolean(marketingroitrackingMenu)}
            onClose={() => handleMenuClose('marketingroitracking')}>
            <MenuItem onClick={() => {}}>Campaign Tracking</MenuItem>
            <MenuItem onClick={() => {}}>Conversion Tracking</MenuItem>
            <MenuItem onClick={() => {}}>Multi-channel Attribution</MenuItem>
            <MenuItem onClick={() => {}}>Revenue Tracking</MenuItem>
            <MenuItem onClick={() => {}}>Cost Tracking</MenuItem>
            <MenuItem onClick={() => {}}>ROI Calculation</MenuItem>
            <MenuItem onClick={() => {}}>Custom ROI Formulas</MenuItem>
            <MenuItem onClick={() => {}}>A/B Testing for Campaigns</MenuItem>
            <MenuItem onClick={() => {}}>Landing Page Analytics</MenuItem>
            <MenuItem onClick={() => {}}>Lead Attribution Models</MenuItem>
            <MenuItem onClick={() => {}}>Goal Tracking</MenuItem>
            <MenuItem onClick={() => {}}>Funnel Analysis</MenuItem>
            <MenuItem onClick={() => {}}>CRM Integration</MenuItem>
            <MenuItem onClick={() => {}}>Real-time Analytics</MenuItem>
            <MenuItem onClick={() => {}}>Customer Lifetime Value</MenuItem>
            <MenuItem onClick={() => {}}>Customer Segmentation</MenuItem>
            <MenuItem onClick={() => {}}>Reporting and Dashboards</MenuItem>
            <MenuItem onClick={() => {}}>Marketing Automation</MenuItem>
            <MenuItem onClick={() => {}}>Mobile Analytics Access</MenuItem>
            <MenuItem onClick={() => {}}>Compliance and Privacy</MenuItem>
               </Menu>
              </ListItem>
                      {/*Customization and Scalability*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('customAndScal', event)}>
            <ListItemIcon>
              <ChangeCircleSharpIcon />
            </ListItemIcon>
            <ListItemText>Customization and Scalability</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={customAndScalMenu}
            open={Boolean(customAndScalMenu)}
            onClose={() => handleMenuClose('customAndScal')}>
            <MenuItem onClick={() => {}}>Custom Fields</MenuItem>
            <MenuItem onClick={() => {}}>Customizable Layouts</MenuItem>
            <MenuItem onClick={() => {}}>Workflow Automation</MenuItem>
            <MenuItem onClick={() => {}}>Role-based Access Control</MenuItem>
            <MenuItem onClick={() => {}}>User Permissions</MenuItem>
            <MenuItem onClick={() => {}}>Custom Modules</MenuItem>
            <MenuItem onClick={() => {}}>API for Integration</MenuItem>
            <MenuItem onClick={() => {}}>Data Import and Export</MenuItem>
            <MenuItem onClick={() => {}}>Scalable Infrastructure</MenuItem>
            <MenuItem onClick={() => {}}>Multi-language Support</MenuItem>
            <MenuItem onClick={() => {}}>Customizable Reporting</MenuItem>
            <MenuItem onClick={() => {}}>Custom Workflows</MenuItem>
            <MenuItem onClick={() => {}}>Integration Flexibility</MenuItem>
            <MenuItem onClick={() => {}}>Mobile Customization</MenuItem>
            <MenuItem onClick={() => {}}>Data Security Measures</MenuItem>
            <MenuItem onClick={() => {}}>Data Retention Policies</MenuItem>
            <MenuItem onClick={() => {}}>Customizable Notifications</MenuItem>
            <MenuItem onClick={() => {}}>Compliance Controls</MenuItem>
             <MenuItem onClick={() => {}}>Version Control</MenuItem>
             <MenuItem onClick={() => {}}>Support and Training</MenuItem>
              <MenuItem onClick={() => {}}>Data Backup and Recovery</MenuItem>
              </Menu>
              </ListItem>
                    {/*User Training and Support*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('usertranandsupp', event)}>
            <ListItemIcon>
              <ManageAccountsSharpIcon />
            </ListItemIcon>
            <ListItemText>User Training and Support</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={usertranandsuppMenu}
            open={Boolean(usertranandsuppMenu)}
            onClose={() => handleMenuClose('usertranandsupp')}>
            <MenuItem onClick={() => {}}>Onboarding Assistance</MenuItem>
            <MenuItem onClick={() => {}}>Interactive Tutorials</MenuItem>
            <MenuItem onClick={() => {}}>Video Training</MenuItem>
            <MenuItem onClick={() => {}}>Knowledge Base</MenuItem>
            <MenuItem onClick={() => {}}>User Training Modules</MenuItem>
            <MenuItem onClick={() => {}}>Live Webinars</MenuItem>
            <MenuItem onClick={() => {}}>Dedicated Support Team</MenuItem>
            <MenuItem onClick={() => {}}>Helpdesk Integration</MenuItem>
            <MenuItem onClick={() => {}}>Chat Support</MenuItem>
            <MenuItem onClick={() => {}}>Email Support</MenuItem>
            <MenuItem onClick={() => {}}>Phone Support</MenuItem>
            <MenuItem onClick={() => {}}>Community Forums</MenuItem>
            <MenuItem onClick={() => {}}>In-app Feedback</MenuItem>
            <MenuItem onClick={() => {}}>Training Web Portal</MenuItem>
            <MenuItem onClick={() => {}}>Gamified Learning</MenuItem>
            <MenuItem onClick={() => {}}>Feedback Analysis</MenuItem>
            <MenuItem onClick={() => {}}>Scalable Support Team</MenuItem>
            <MenuItem onClick={() => {}}>CRM User Communities</MenuItem>
            <MenuItem onClick={() => {}}>User Certifications</MenuItem>
            <MenuItem onClick={() => {}}>Multilingual Support</MenuItem>
            <MenuItem onClick={() => {}}>Self-paced Learning Paths</MenuItem>
            <MenuItem onClick={() => {}}>Support Analytics</MenuItem>
            <MenuItem onClick={() => {}}>Customizable Training Plans</MenuItem>
            <MenuItem onClick={() => {}}>Access to Updates</MenuItem>
              </Menu>
              </ListItem>
                      {/*Artificial Intelligence (AI) Integration
*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('aiintegration', event)}>
            <ListItemIcon>
              <SmartToySharpIcon />
            </ListItemIcon>
            <ListItemText>Artificial Intelligence (AI) Integration</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={aiintegrationMenu}
            open={Boolean(aiintegrationMenu)}
            onClose={() => handleMenuClose('aiintegration')}>
            <MenuItem onClick={() => {}}>Predictive Analytics</MenuItem>
            <MenuItem onClick={() => {}}>Lead Scoring</MenuItem>
            <MenuItem onClick={() => {}}>Personalized Marketing</MenuItem>
            <MenuItem onClick={() => {}}>AI-powered Insights</MenuItem>
            <MenuItem onClick={() => {}}>Behavior Analysis</MenuItem>
            <MenuItem onClick={() => {}}>Churn Prediction</MenuItem>
            <MenuItem onClick={() => {}}>Customer Segmentation</MenuItem>
            <MenuItem onClick={() => {}}>Content Recommendations</MenuItem>
            <MenuItem onClick={() => {}}>AI-driven Email Campaigns</MenuItem>
            <MenuItem onClick={() => {}}>Predictive Lead Scoring</MenuItem>
            <MenuItem onClick={() => {}}>Conversion Rate Prediction</MenuItem>
            <MenuItem onClick={() => {}}>Cross-selling Recommendations</MenuItem>
            <MenuItem onClick={() => {}}>AI Chatbots</MenuItem>
            <MenuItem onClick={() => {}}>Sales Forecasting</MenuItem>
            <MenuItem onClick={() => {}}>Customer Lifetime Value Prediction</MenuItem>
            <MenuItem onClick={() => {}}>A/B Test Optimization</MenuItem>
            <MenuItem onClick={() => {}}>CRM Integration</MenuItem>
            <MenuItem onClick={() => {}}>AI-driven Reporting</MenuItem>
            <MenuItem onClick={() => {}}>Real-time AI Insights</MenuItem>
            <MenuItem onClick={() => {}}>Marketing Automation</MenuItem>
            <MenuItem onClick={() => {}}>Compliance and Data Privacy</MenuItem>
            <MenuItem onClick={() => {}}>Machine Learning Models</MenuItem>
            
              </Menu>
              </ListItem>
                  {/*Private Cloud Integration (Customers Private CRM)*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('pvtcloudintegration', event)}>
            <ListItemIcon>
              <CloudSyncIcon />
            </ListItemIcon>
            <ListItemText>Private Cloud Integration (Customers Private CRM)</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={pvtcloudintegrationMenu}
            open={Boolean(pvtcloudintegrationMenu)}
            onClose={() => handleMenuClose('pvtcloudintegration')}>
            <MenuItem onClick={() => {}}>Private Cloud Integration</MenuItem>
            <MenuItem onClick={() => {}}>Data Security</MenuItem>
            <MenuItem onClick={() => {}}>Scalability</MenuItem>
            <MenuItem onClick={() => {}}>Customization</MenuItem>
            <MenuItem onClick={() => {}}>Data Control</MenuItem>
            <MenuItem onClick={() => {}}>Remote Access</MenuItem>
            <MenuItem onClick={() => {}}>Redundancy and Reliability</MenuItem>
            <MenuItem onClick={() => {}}>Disaster Recovery</MenuItem>
            <MenuItem onClick={() => {}}>Compliance Assurance</MenuItem>
            <MenuItem onClick={() => {}}>Hybrid Cloud Capabilities</MenuItem>
            <MenuItem onClick={() => {}}>Private Cloud Monitoring</MenuItem>
            <MenuItem onClick={() => {}}>Data Encryption</MenuItem>
            <MenuItem onClick={() => {}}>Access Control</MenuItem>
            <MenuItem onClick={() => {}}>Compliance Auditing</MenuItem>
            <MenuItem onClick={() => {}}>Integration Flexibility</MenuItem>
            <MenuItem onClick={() => {}}>API Connectivity</MenuItem>
            <MenuItem onClick={() => {}}>Private Cloud Resource Scaling</MenuItem>
            <MenuItem onClick={() => {}}>Data Migration</MenuItem>
            <MenuItem onClick={() => {}}>High-speed Connectivity</MenuItem>
            <MenuItem onClick={() => {}}>Compliance and Data Privacy</MenuItem>
            <MenuItem onClick={() => {}}>Private Cloud Support</MenuItem>
              </Menu>
              </ListItem>
               {/*Marketing Cloud Integration*/}
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('Markcldint', event)}>
            <ListItemIcon>
              <CloudDoneIcon />
            </ListItemIcon>
            <ListItemText>Marketing Cloud Integration</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={MarkcldintMenu}
            open={Boolean(MarkcldintMenu)}
            onClose={() => handleMenuClose('Markcldint')}>
            <MenuItem onClick={() => {}}>Marketing Cloud Integration
</MenuItem>
            <MenuItem onClick={() => {}}>Unified Customer Profiles
</MenuItem>
            <MenuItem onClick={() => {}}>Data Synchronization
</MenuItem>
            <MenuItem onClick={() => {}}>Lead and Customer Segmentation
</MenuItem>
            <MenuItem onClick={() => {}}>Personalized Campaigns
</MenuItem>
            <MenuItem onClick={() => {}}>Automated Email Marketing
</MenuItem>
            <MenuItem onClick={() => {}}>Multi-channel Campaigns
</MenuItem>
            <MenuItem onClick={() => {}}>Lead Nurturing Workflows
</MenuItem>
            <MenuItem onClick={() => {}}>Drip Campaigns
</MenuItem>
            <MenuItem onClick={() => {}}>Lead Scoring Integration
</MenuItem>
            <MenuItem onClick={() => {}}>Analytics and Reporting
</MenuItem>
            <MenuItem onClick={() => {}}>A/B Testing
</MenuItem>
            <MenuItem onClick={() => {}}>Journey Mapping
</MenuItem>
            <MenuItem onClick={() => {}}>Marketing Automation
</MenuItem>
            <MenuItem onClick={() => {}}>CRM Integration
</MenuItem>
            <MenuItem onClick={() => {}}>Personalization Tokens
</MenuItem>
            <MenuItem onClick={() => {}}>Customer Behavioral Tracking
</MenuItem>
            <MenuItem onClick={() => {}}>Social Media Integration
</MenuItem>
            <MenuItem onClick={() => {}}>Landing Page Integration
</MenuItem>
            <MenuItem onClick={() => {}}>Lead Source Attribution
</MenuItem>
            <MenuItem onClick={() => {}}>CRM Mobile Access</MenuItem>
            <MenuItem onClick={() => {}}>Compliance and Data Privacy</MenuItem>
            
            
</Menu>
 </ListItem>
     {/*AppExchange Marketplace*/}
     <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('appexchangemarket', event)}>
            <ListItemIcon>
              <AppRegistrationIcon />
            </ListItemIcon>
            <ListItemText>AppExchange Marketplace</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={appexchangemarketMenu}
            open={Boolean(appexchangemarketMenu)}
            onClose={() => handleMenuClose('appexchangemarket')}>
            <MenuItem onClick={() => {}}>Third-party App Marketplace
</MenuItem>
            <MenuItem onClick={() => {}}>App Integration
</MenuItem>
            <MenuItem onClick={() => {}}>Customization
</MenuItem>
            <MenuItem onClick={() => {}}>App Discovery
</MenuItem>
            <MenuItem onClick={() => {}}>User Ratings and Reviews
</MenuItem>
            <MenuItem onClick={() => {}}>Compatibility Check
</MenuItem>
            <MenuItem onClick={() => {}}>Security and Compliance
</MenuItem>
            <MenuItem onClick={() => {}}>Installation and Setup
</MenuItem>
            <MenuItem onClick={() => {}}>App Categories
</MenuItem>
            <MenuItem onClick={() => {}}>Free and Paid Apps
</MenuItem>
            <MenuItem onClick={() => {}}>API for Integration
</MenuItem>
            <MenuItem onClick={() => {}}>App Updates
</MenuItem>
            <MenuItem onClick={() => {}}>App Permissions
</MenuItem>
            <MenuItem onClick={() => {}}>Support and Documentation
</MenuItem>
            <MenuItem onClick={() => {}}>App Usage Analytics
</MenuItem>
            <MenuItem onClick={() => {}}>Data Sync and Integration
</MenuItem>
            <MenuItem onClick={() => {}}>App Testing
</MenuItem>
            <MenuItem onClick={() => {}}>Vendor Partnerships
</MenuItem>
            <MenuItem onClick={() => {}}>App Uninstallation
</MenuItem>
            <MenuItem onClick={() => {}}>User Training
</MenuItem>
            <MenuItem onClick={() => {}}>Feedback and Feature Requests
</MenuItem>
            <MenuItem onClick={() => {}}>Mobile App Integration
</MenuItem>
            <MenuItem onClick={() => {}}>App Licensing
</MenuItem>
            
            
            
            
            
</Menu>
 </ListItem>
     {/*Community Cloud*/}
     <ListItem disablePadding>
          <ListItemButton onClick={(event) => handleMenuOpen('communitycloud', event)}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText>Community Cloud</ListItemText>
          </ListItemButton>
          <Menu
            anchorEl={communitycloudMenu}
            open={Boolean(communitycloudMenu)}
            onClose={() => handleMenuClose('communitycloud')}>
            <MenuItem onClick={() => {}}>Online Community Creation</MenuItem>
            <MenuItem onClick={() => {}}>Community Customization</MenuItem>
            <MenuItem onClick={() => {}}>User Authentication</MenuItem>
            <MenuItem onClick={() => {}}>Self-registration</MenuItem>
            <MenuItem onClick={() => {}}>Role-based Access</MenuItem>
            <MenuItem onClick={() => {}}>Content Management</MenuItem>
            <MenuItem onClick={() => {}}>Knowledge Sharing</MenuItem>
            <MenuItem onClick={() => {}}>Discussion Forums</MenuItem>
            <MenuItem onClick={() => {}}>Real-time Chat</MenuItem>
            <MenuItem onClick={() => {}}>Event Hosting</MenuItem>
            <MenuItem onClick={() => {}}>Integration Capabilities</MenuItem>
            <MenuItem onClick={() => {}}>Mobile Accessibility</MenuItem>
            <MenuItem onClick={() => {}}>Search and Discovery</MenuItem>
            <MenuItem onClick={() => {}}>Gamification</MenuItem>
            <MenuItem onClick={() => {}}>Analytics and Reporting</MenuItem>
            <MenuItem onClick={() => {}}>User Engagement Tracking</MenuItem>
            <MenuItem onClick={() => {}}>User Profile Management</MenuItem>
            <MenuItem onClick={() => {}}>Partner Collaboration</MenuItem>
            <MenuItem onClick={() => {}}>Community Moderation</MenuItem>
            <MenuItem onClick={() => {}}>Community Feedback</MenuItem>
            <MenuItem onClick={() => {}}>User Support</MenuItem>
            <MenuItem onClick={() => {}}>Privacy Controls</MenuItem>
            <MenuItem onClick={() => {}}>Community Integration</MenuItem>
            <MenuItem onClick={() => {}}>Community Marketing</MenuItem>
<MenuItem onClick={() => {}}>Multi-language Support</MenuItem>
<MenuItem onClick={() => {}}>Compliance and Data Security</MenuItem>
<MenuItem onClick={() => {}}>Community Training</MenuItem>
 </Menu>
 </ListItem>
        {/* Add more ListItems for other menus as needed */}
      </List>
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
            <h3>T-Tech CRM</h3>
             </Typography>
             <Box sx={{ flexGrow: 1, ml: 'auto', display: 'flex', justifyContent: 'flex-end', paddingRight: 2 }}>
             <div style={{ position: 'relative', width: '200px'}}>
             <IconButton size="large" edge="end" color="inherit" sx={{ position: 'absolute', right: 0 }}>
                <SearchIcon/>
               </IconButton>
              <InputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}  
                sx={{ paddingRight: '40px'}} // Adjust the padding based on your design
                className="custom-placeholder"
              />
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>   
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
      </Box>
      
      
    </Box>
    
  );
}  