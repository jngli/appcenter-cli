/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PackageUpdateRequest class.
 * @constructor
 * A request containing information pertaining to distributing a package.
 *
 * @member {string} [status] The package state.<br>
 * <b>available</b>: The uploaded package has been distributed. When changing
 * to available a distribution group name or id must be set.<br>
 * <b>unavailable</b>: The uploaded package is not visible to the user. <br>
 * . Possible values include: 'available', 'unavailable'
 * 
 * @member {string} [destributionGroupName] Name of a distribution group. The
 * package will be distributed to this distribution group. If the
 * distribution group doesn't exist a 400 is returned. If both, distribution
 * group name and id, are passed a 400 is returned.
 * 
 * @member {string} [destributionGroupId] Id of a distribution group. The
 * package will be distributed to this distribution group. If the
 * distribution group doesn't exist a 400 is returned. If both, distribution
 * group name and id, are passed a 400 is returned.
 * 
 * @member {string} [releaseNotes] Release notes for this package.
 * 
 */
function PackageUpdateRequest() {
}

/**
 * Defines the metadata of PackageUpdateRequest
 *
 * @returns {object} metadata of PackageUpdateRequest
 *
 */
PackageUpdateRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PackageUpdateRequest',
    type: {
      name: 'Composite',
      className: 'PackageUpdateRequest',
      modelProperties: {
        status: {
          required: false,
          serializedName: 'status',
          type: {
            name: 'String'
          }
        },
        destributionGroupName: {
          required: false,
          serializedName: 'destribution_group_name',
          type: {
            name: 'String'
          }
        },
        destributionGroupId: {
          required: false,
          serializedName: 'destribution_group_id',
          type: {
            name: 'String'
          }
        },
        releaseNotes: {
          required: false,
          serializedName: 'release_notes',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PackageUpdateRequest;