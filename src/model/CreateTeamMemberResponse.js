/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var Error = require('./Error');
var TeamMember = require('./TeamMember');




/**
 * The CreateTeamMemberResponse model module.
 * @module model/CreateTeamMemberResponse
 */

/**
 * Constructs a new <code>CreateTeamMemberResponse</code>.
 * Represents a response from a create request, containing the created &#x60;TeamMember&#x60; object or error messages.
 * @alias module:model/CreateTeamMemberResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>CreateTeamMemberResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateTeamMemberResponse} obj Optional instance to populate.
 * @return {module:model/CreateTeamMemberResponse} The populated <code>CreateTeamMemberResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('team_member')) {
      obj['team_member'] = TeamMember.constructFromObject(data['team_member']);
    }
      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
    }
  return obj;
}

/**
 * The successfully created `TeamMember` object.
 * @member {module:model/TeamMember} team_member
 */
exports.prototype['team_member'] = undefined;
/**
 * The errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;



module.exports = exports;



