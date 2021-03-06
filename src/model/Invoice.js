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
var InvoicePaymentRequest = require('./InvoicePaymentRequest');
var InvoiceRecipient = require('./InvoiceRecipient');
var Money = require('./Money');




/**
 * The Invoice model module.
 * Note: This model is in beta.
 * @module model/Invoice
 */

/**
 * Constructs a new <code>Invoice</code>.
 * Stores information about an invoice. You use the Invoices API to create and process invoices. For more information, see [Manage Invoices Using the Invoices API](/docs/invoices-api/overview).
 * @alias module:model/Invoice
 * @class
 */
var exports = function() {
  var _this = this;

















};

/**
 * Constructs a <code>Invoice</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Invoice} obj Optional instance to populate.
 * @return {module:model/Invoice} The populated <code>Invoice</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('version')) {
      obj['version'] = ApiClient.convertToType(data['version'], 'Number');
    }
      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('order_id')) {
      obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
    }
      if (data.hasOwnProperty('primary_recipient')) {
      obj['primary_recipient'] = InvoiceRecipient.constructFromObject(data['primary_recipient']);
    }
      if (data.hasOwnProperty('payment_requests')) {
      obj['payment_requests'] = ApiClient.convertToType(data['payment_requests'], [InvoicePaymentRequest]);
    }
      if (data.hasOwnProperty('invoice_number')) {
      obj['invoice_number'] = ApiClient.convertToType(data['invoice_number'], 'String');
    }
      if (data.hasOwnProperty('title')) {
      obj['title'] = ApiClient.convertToType(data['title'], 'String');
    }
      if (data.hasOwnProperty('description')) {
      obj['description'] = ApiClient.convertToType(data['description'], 'String');
    }
      if (data.hasOwnProperty('scheduled_at')) {
      obj['scheduled_at'] = ApiClient.convertToType(data['scheduled_at'], 'String');
    }
      if (data.hasOwnProperty('public_url')) {
      obj['public_url'] = ApiClient.convertToType(data['public_url'], 'String');
    }
      if (data.hasOwnProperty('next_payment_amount_money')) {
      obj['next_payment_amount_money'] = Money.constructFromObject(data['next_payment_amount_money']);
    }
      if (data.hasOwnProperty('status')) {
      obj['status'] = ApiClient.convertToType(data['status'], 'String');
    }
      if (data.hasOwnProperty('timezone')) {
      obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('updated_at')) {
      obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
    }
    }
  return obj;
}

/**
 * The Square-assigned ID of the invoice.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The version number, which is incremented each time an update is committed to the invoice.
 * @member {Number} version
 */
exports.prototype['version'] = undefined;
/**
 * The ID of the location that this invoice is associated with. This field is required when creating an invoice.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * The ID of the `order` for which the invoice is created.  This order must be in the `OPEN` state and must belong to the `location_id` specified for this invoice. This field is required when creating an invoice.
 * @member {String} order_id
 */
exports.prototype['order_id'] = undefined;
/**
 * The customer who gets the invoice. Square uses the contact information to deliver the invoice. This field is required when creating an invoice.
 * @member {module:model/InvoiceRecipient} primary_recipient
 */
exports.prototype['primary_recipient'] = undefined;
/**
 * An array of `InvoicePaymentRequest` objects. Each object defines a payment request in an invoice payment schedule. It provides information such as when and how Square processes payments. You can specify maximum of nine payment requests. All all the payment requests must specify the same `request_method`.  This field is required when creating an invoice.
 * @member {Array.<module:model/InvoicePaymentRequest>} payment_requests
 */
exports.prototype['payment_requests'] = undefined;
/**
 * A user-friendly invoice number. The value is unique within a location. If not provided when creating an invoice, Square assigns a value. It increments from 1 and padded with zeros making it 7 characters long for example, 0000001, 0000002.
 * @member {String} invoice_number
 */
exports.prototype['invoice_number'] = undefined;
/**
 * The title of the invoice.
 * @member {String} title
 */
exports.prototype['title'] = undefined;
/**
 * The description of the invoice. This is visible the customer receiving the invoice.
 * @member {String} description
 */
exports.prototype['description'] = undefined;
/**
 * The timestamp when the invoice is scheduled for processing, in RFC 3339 format. At the specified time, depending on the `request_method`, Square sends the invoice to the customer's email address or charge the customer's card on file.  If the field is not set, Square processes the invoice immediately after publication.
 * @member {String} scheduled_at
 */
exports.prototype['scheduled_at'] = undefined;
/**
 * The URL of the Square-hosted invoice page. After you publish the invoice using the `PublishInvoice` endpoint, Square hosts the invoice page and returns the page URL in the response.
 * @member {String} public_url
 */
exports.prototype['public_url'] = undefined;
/**
 * The current amount due for the invoice. In addition to the amount due on the next payment request, this also includes any overdue payment amounts.
 * @member {module:model/Money} next_payment_amount_money
 */
exports.prototype['next_payment_amount_money'] = undefined;
/**
 * The status of the invoice. See [InvoiceStatus](#type-invoicestatus) for possible values
 * @member {String} status
 */
exports.prototype['status'] = undefined;
/**
 * The time zone of the date values (for example, `due_date`) specified in the invoice.
 * @member {String} timezone
 */
exports.prototype['timezone'] = undefined;
/**
 * The timestamp when the invoice was created, in RFC 3339 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * The timestamp when the invoice was last updated, in RFC 3339 format.
 * @member {String} updated_at
 */
exports.prototype['updated_at'] = undefined;



module.exports = exports;



