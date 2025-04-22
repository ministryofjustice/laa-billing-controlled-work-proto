//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

//Continue with import or cancel
router.post('/submission-import-error', function(request, response) {

  var keepImport = request.session.data['keepImport']
  if (keepImport == "No"){
      response.redirect("wip/submissions-submitted")
  } 
  else {
      response.redirect("wip/create/submission-start?submissionType=Legal help&firmAC=C1B1C1&Immigration_matterStart=3&Family_matterStart=2")
  }
})
