import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import SoapIcon from '@mui/icons-material/Soap';
import ListItemIcon from '@mui/material/ListItemIcon';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ListItemText from '@mui/material/ListItemText';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import TimelineIcon from '@mui/icons-material/Timeline';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';  
import { useNavigate } from 'react-router-dom';

 
const drawerWidth = 240;
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
  export default function ResponsiveDrawer(props: Props) {
    const navigate = useNavigate();
     const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
  setMobileOpen(!mobileOpen);
  };
     const drawer = (
    <div>    
      <Toolbar />
      <Divider />
      <List>
      <ListItem  disablePadding onClick={()=>{navigate("/")}}>
            <ListItemButton>
              <ListItemIcon>
                <ShuffleOnIcon/>
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
          </ListItem>
      <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LeaderboardIcon/>
              </ListItemIcon>
              <ListItemText>Contact Management
</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TimelineIcon/>
              </ListItemIcon>
              <ListItemText>Email Marketing Integration</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Diversity3Icon/>
              </ListItemIcon>
              <ListItemText>Sales Funnel Management</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SoapIcon/>
              </ListItemIcon>
              <ListItemText>Campaign Management</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthIcon/>
              </ListItemIcon>
              <ListItemText>Customer Se</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AppRegistrationIcon/>
              </ListItemIcon>
              <ListItemText>Lead Scoring</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AttachEmailIcon/>
              </ListItemIcon>
              <ListItemText>Analytics and Reporting</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FacebookIcon/>
              </ListItemIcon>
              <ListItemText>Task and Calendar Management</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GoogleIcon/>
              </ListItemIcon>
              <ListItemText>Workflow Automation</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShuffleOnIcon/>
              </ListItemIcon>
              <ListItemText>Mobile Accessibility</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShuffleOnIcon/>
              </ListItemIcon>
              <ListItemText>Lead Generation Forms</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShuffleOnIcon/>
              </ListItemIcon>
              <ListItemText>Social Media Monitoring and integration</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShuffleOnIcon/>
              </ListItemIcon>
              <ListItemText>Customer Support integration</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShuffleOnIcon/>
              </ListItemIcon>
              <ListItemText>Marketing Roi Tracking</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShuffleOnIcon/>
              </ListItemIcon>
              <ListItemText>Customization and Scalability</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShuffleOnIcon/>
              </ListItemIcon>
              <ListItemText>User Training Support</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShuffleOnIcon/>
              </ListItemIcon>
              <ListItemText>Artificial Intelligence(Ai)Integration</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShuffleOnIcon/>
              </ListItemIcon>
              <ListItemText>Private Cloud Integration(Customers Private CRM)</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShuffleOnIcon/>
              </ListItemIcon>
              <ListItemText>Marketing Cloud integration</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShuffleOnIcon/>
              </ListItemIcon>
              <ListItemText>AppExchange Marketplace</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShuffleOnIcon/>
              </ListItemIcon>
              <ListItemText>Community Cloud</ListItemText>
            </ListItemButton>
          </ListItem>
    
        
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
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
            T-Tech CRM
          </Typography>
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
        <Typography paragraph>
        
T-Tech CRM (Customer Relationship Management) for our UAE-based company is a comprehensive software solution
 designed to streamline and enhance the management of customer relationships and business processes.
Tailored to meet the specific needs of our company operating in the United Arab Emirates, this CRM system 
offers a range of features and benefits:
Contact and Lead Management: T-Tech CRM allows us to efficiently manage our contacts, leads, and potential customers in one centralized location. It enables us to capture and organize essential information about clients and prospects, helping us maintain a complete and up-to-date database.

Sales and 
oportunity Tracking: This CRM system provides tools for tracking sales opportunities through various stages of the sales pipeline. It helps our sales team manage leads, follow up on prospects, and close deals more effectively.

Marketing Campaigns: T-Tech CRM supports marketing efforts by enabling targeted email campaigns, lead nurturing, and customer segmentation. We can design and execute marketing strategies to engage customers and generate leads.

Customer Support and Service: Our company can improve customer service and support by using the CRM to track and manage customer inquiries, issues, and requests. It ensures timely responses and helps build long-term customer relationships.

Integration with Communication Channels: The CRM system can be integrated with various communication channels, such as email, phone systems, and social media, allowing us to capture interactions and communications with customers for better relationship management.

Analytics and Reporting: T-Tech CRM offers robust reporting and analytics capabilities, providing insights into sales performance, customer behavior, and marketing campaign effectiveness. This data-driven approach helps us make informed business decisions.
        </Typography>
        
      </Box>
    </Box>
  );
}


// contact menu 
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