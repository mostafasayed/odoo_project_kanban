odoo.define('web_project_kanban.update_kanban_project', function(require) {
    "use strict";

    var KanbanRecord = require('web.KanbanRecord');

    KanbanRecord.include({
    _openRecord: function () {
        if (this.modelName === 'project.project' && this.$(".o_project_kanban_boxes a").length) {
                var action = {
                    type: 'ir.actions.act_window',
                    res_model: 'project.project',
                    view_mode: 'form',
                    view_type: 'form,kanban,tree',
                    views: [[false, 'form']],
                    res_id: this.record.id.raw_value
                };
                this.do_action(action);
            } else {
                this._super.apply(this, arguments);
            }
    }
});

});

