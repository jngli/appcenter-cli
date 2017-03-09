/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the CrashGroup class.
 * @constructor
 * @member {string} crashGroupId
 * 
 * @member {string} displayId
 * 
 * @member {string} appVersion
 * 
 * @member {string} build
 * 
 * @member {string} status Possible values include: 'open', 'closed', 'ignored'
 * 
 * @member {number} count
 * 
 * @member {number} [impactedUsers]
 * 
 * @member {date} firstOccurrence
 * 
 * @member {date} lastOccurrence
 * 
 * @member {string} [exception]
 * 
 * @member {string} errorReason
 * 
 * @member {object} [reasonFrame]
 * 
 * @member {string} [reasonFrame.className] name of the class
 * 
 * @member {string} [reasonFrame.method] name of the method
 * 
 * @member {boolean} [reasonFrame.classMethod] is a class method
 * 
 * @member {string} [reasonFrame.file] name of the file
 * 
 * @member {number} [reasonFrame.line] line number
 * 
 * @member {boolean} [reasonFrame.appCode] this line isn't from any framework
 * 
 * @member {string} [reasonFrame.frameworkName] Name of the framework
 * 
 * @member {string} [reasonFrame.codeFormatted] Formatted frame string
 * 
 * @member {string} [reasonFrame.language] programming language of the frame.
 * Possible values include: 'JavaScript', 'CSharp', 'Objective-C',
 * 'Objective-Cpp', 'Cpp', 'C', 'Swift', 'Java', 'Unknown'
 * 
 * @member {string} [reasonFrame.methodParams] parameters of the frames method
 * 
 * @member {string} [reasonFrame.exceptionType] Exception type.
 * 
 * @member {string} [reasonFrame.osExceptionType] OS exception type. (aka.
 * SIGNAL)
 * 
 * @member {boolean} fatal Crash or handled exception
 * 
 * @member {string} annotation
 * 
 */
function CrashGroup() {
}

/**
 * Defines the metadata of CrashGroup
 *
 * @returns {object} metadata of CrashGroup
 *
 */
CrashGroup.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'CrashGroup',
    type: {
      name: 'Composite',
      className: 'CrashGroup',
      modelProperties: {
        crashGroupId: {
          required: true,
          serializedName: 'crash_group_id',
          type: {
            name: 'String'
          }
        },
        displayId: {
          required: true,
          serializedName: 'display_id',
          type: {
            name: 'String'
          }
        },
        appVersion: {
          required: true,
          serializedName: 'app_version',
          type: {
            name: 'String'
          }
        },
        build: {
          required: true,
          serializedName: 'build',
          type: {
            name: 'String'
          }
        },
        status: {
          required: true,
          serializedName: 'status',
          type: {
            name: 'String'
          }
        },
        count: {
          required: true,
          serializedName: 'count',
          type: {
            name: 'Number'
          }
        },
        impactedUsers: {
          required: false,
          serializedName: 'impacted_users',
          type: {
            name: 'Number'
          }
        },
        firstOccurrence: {
          required: true,
          serializedName: 'first_occurrence',
          type: {
            name: 'DateTime'
          }
        },
        lastOccurrence: {
          required: true,
          serializedName: 'last_occurrence',
          type: {
            name: 'DateTime'
          }
        },
        exception: {
          required: false,
          serializedName: 'exception',
          type: {
            name: 'String'
          }
        },
        errorReason: {
          required: true,
          serializedName: 'error_reason',
          type: {
            name: 'String'
          }
        },
        reasonFrame: {
          required: false,
          serializedName: 'reason_frame',
          type: {
            name: 'Composite',
            className: 'ReasonStackFrame'
          }
        },
        fatal: {
          required: true,
          serializedName: 'fatal',
          type: {
            name: 'Boolean'
          }
        },
        annotation: {
          required: true,
          serializedName: 'annotation',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = CrashGroup;
