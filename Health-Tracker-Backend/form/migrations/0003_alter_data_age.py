# Generated by Django 4.0.4 on 2022-04-28 15:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0002_alter_data_age'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data',
            name='age',
            field=models.IntegerField(),
        ),
    ]
