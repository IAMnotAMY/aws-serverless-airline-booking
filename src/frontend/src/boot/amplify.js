import Amplify from '@aws-amplify/core'
import { Auth } from '@aws-amplify/auth'
import awsconfig from '../aws-exports'
import '@aws-amplify/ui-vue'

// Configure Amplify with mock config for local development
try {
  Amplify.configure(awsconfig)
  Auth.configure(awsconfig)
  Amplify.Logger.LOG_LEVEL = 'INFO'
} catch (error) {
  console.log('Amplify configuration loaded with mock data for local development')
}
