
import moment from 'moment'

function stripCarriageReturns (str) {
  return str.replace(/[\n\r]/g, '');
}

function componentToRouterPath (c) {
  String.prototype.camelCaseToDashed = function(){
    return this.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
  path = _.replace(c,"./views","")
  path = _.replace(path,".vue","")
  path = path.camelCaseToDashed();
  return path
}


function stripTags (str) {
  // strip tags
  str = str.replace(/<\/?[^>]+>/g, '');
  // strip carriage returns
  str = str.replace(/[\n\r]/g, '');
  return str
}

function generateRoutes (arr) {
  // generates routes for routes.js and injects metadata about each page
  const _REDIRECT_ROUTE = {
      path: '/*',
      title: 'Redirect',
      type: 'redirect',
      created: moment('2017-04-25').format('MM/DD/YYYY'),
      status: 'live',
      name: 'Redirect',
      redirect: '/'
  }

  let _r = [];
  let _obj = {}
  let _name = 'NoNameSpecified'
  let _created = moment().format('MM/DD/YYYY')
  let _expired = moment('2017-04-25').add(999, 'Years').calendar()
  let _title = 'No Title Specified'
  let _description = 'No Description specified'
  let _status = 'live'
  let _type = 'page'

  arr.forEach(function(eachObj) {
      _obj = {}
      _obj.path = eachObj["path"]
      // if (eachObj["path"]) {
      //   _obj.path = eachObj["path"]
      // }else {
      //   _obj.path = '/'
      //   console.table(eachObj["component"])
      // }

      //console.log(eachObj["component"].components)
      _obj.component = eachObj["component"]
      // Create page-specific meta data from views
      //obj.name = String(eachObj["component"].pageData.title).replace(/\s+/g, '') || 'NoName'
      if ('pageData' in eachObj["component"]) {

        if ('name' in eachObj["component"]) {
          _obj.name = String(eachObj["component"].pageData.title).replace(/\s+/g, '')
        } else {
          _obj.name = _name
        }

        if ('created' in eachObj["component"].pageData) {
          // _obj.created = new Date(String(eachObj["component"].pageData.created).replace(/-/g, "/"))
          _obj.created = moment(eachObj["component"].pageData.created).format('MM/DD/YYYY')
        } else {
          _obj.created = _created
        }

        if ('expired' in eachObj["component"].pageData) {
          _obj.expired = moment(eachObj["component"].pageData.expired).format('MM/DD/YYYY')

        } else {
          _obj.expired = _expired
        }

        if ('title' in eachObj["component"].pageData) {
          _obj.title = eachObj["component"].pageData.title,100
        } else {
          _obj.title = _title
        }

        if ('description' in eachObj["component"].pageData) {
          _obj.description = stripCarriageReturns(eachObj["component"].pageData.description)
        } else {
          _obj.description = _description
        }
        if ('status' in eachObj["component"].pageData) {
          _obj.status = eachObj["component"].pageData.status
        } else {
          _obj.status = _status
        }

        if ('type' in eachObj["component"].pageData) {
          _obj.type = eachObj["component"].pageData.type
        } else {
          _obj.type = _type
        }


      } else {
        _obj.name = _name
        _obj.created = _created
        _obj.expired = _expired
        _obj.title = _title
        _obj.description = _description
        _obj.status = _status
        _obj.type = _type
      }
      _r.push(_obj)




  });
  _r.push(_REDIRECT_ROUTE)
  console.table(_r)
  return _r

}

export {

  generateRoutes,
  stripTags,
  componentToRouterPath,
  stripCarriageReturns


}
