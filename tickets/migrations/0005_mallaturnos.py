# Generated by Django 3.2 on 2023-03-10 20:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tickets', '0004_auto_20230310_1433'),
    ]

    operations = [
        migrations.CreateModel(
            name='MallaTurnos',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('año', models.IntegerField()),
                ('mes', models.IntegerField()),
                ('dia1', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_1', to='tickets.tiposturno')),
                ('dia10', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_10', to='tickets.tiposturno')),
                ('dia11', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_11', to='tickets.tiposturno')),
                ('dia12', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_12', to='tickets.tiposturno')),
                ('dia13', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_13', to='tickets.tiposturno')),
                ('dia14', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_14', to='tickets.tiposturno')),
                ('dia15', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_15', to='tickets.tiposturno')),
                ('dia16', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_16', to='tickets.tiposturno')),
                ('dia17', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_17', to='tickets.tiposturno')),
                ('dia18', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_18', to='tickets.tiposturno')),
                ('dia19', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_19', to='tickets.tiposturno')),
                ('dia2', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_2', to='tickets.tiposturno')),
                ('dia20', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_20', to='tickets.tiposturno')),
                ('dia21', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_21', to='tickets.tiposturno')),
                ('dia22', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_22', to='tickets.tiposturno')),
                ('dia23', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_23', to='tickets.tiposturno')),
                ('dia24', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_24', to='tickets.tiposturno')),
                ('dia25', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_25', to='tickets.tiposturno')),
                ('dia26', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_26', to='tickets.tiposturno')),
                ('dia27', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_27', to='tickets.tiposturno')),
                ('dia28', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_28', to='tickets.tiposturno')),
                ('dia29', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_29', to='tickets.tiposturno')),
                ('dia3', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_3', to='tickets.tiposturno')),
                ('dia30', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_30', to='tickets.tiposturno')),
                ('dia31', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_31', to='tickets.tiposturno')),
                ('dia4', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_4', to='tickets.tiposturno')),
                ('dia5', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_5', to='tickets.tiposturno')),
                ('dia6', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_6', to='tickets.tiposturno')),
                ('dia7', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_7', to='tickets.tiposturno')),
                ('dia8', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_8', to='tickets.tiposturno')),
                ('dia9', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ttTiposTurno_9', to='tickets.tiposturno')),
                ('empleado', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='eempleados_4', to='tickets.empleados')),
            ],
        ),
    ]