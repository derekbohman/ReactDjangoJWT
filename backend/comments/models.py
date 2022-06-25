from django.db import models

class Comment(models.Model):
    user = models.ForeignKey(on_delete=models.CASCADE)
    video_id = models.CharField(max_length=255)
    text = models.CharField(max_length=255)
    likes = models.IntegerField()
    dislikes = models.IntegerField()