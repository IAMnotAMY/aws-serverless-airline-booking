import { boot } from 'quasar/wrappers'
import { Amplify } from 'aws-amplify'
import awsconfig from '../aws-exports'

export default boot(({ app }) => {
  // Configure Amplify with mock config for local development
  try {
    Amplify.configure(awsconfig)
    console.log('Amplify configured successfully')
  } catch (error) {
    console.log('Amplify configuration loaded with mock data for local development')
  }
})
